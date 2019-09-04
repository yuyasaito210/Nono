import * as types from '../../constants/ActionTypes';
import { Actions } from 'react-native-router-flux';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
///////////////////////////////////////////////////////
// Actions
export function loginRequest(email, password) {
  return {
    type: types.LOGIN.REQUEST,
    email,
    password
  }
}

export function loginInit() {
  return {
    type: types.LOGIN.INIT
  }
}

export function loginSuccess(payload) {
  Actions['authorized']();
  return {
    type: types.LOGIN.SUCCESS,
    ...payload
  }
}

export function loginFailure(err) {
  return {
    type: types.LOGIN.FAILURE,
    err
  }
}

export function logoutRequest(payload) {
  loginInit()
  Actions['login']()
  return {
    type: types.LOGOUT.REQUEST
  }
}

export function logoutSuccess(payload) {
  loginInit()
  Actions['login']()
  return {
    type: types.LOGOUT.SUCCESS
  }
}

export function logoutFailure(payload) {
  loginInit()
  Actions['login']()
  return {
    type: types.LOGOUT.FAILURE
  }
}

///////////////////////////////////////////
// Thunk
/**
 * Listen for realtime updates on the current user
 */
export const listenForMemberProfileUpdates = () => {
  const UID = (
    FirebaseRef
    && Firebase
    && Firebase.auth()
    && Firebase.auth().currentUser
    && Firebase.auth().currentUser.uid
  ) ? Firebase.auth().currentUser.uid : null;

  if (!UID) return false;

  const ref = FirebaseRef.child(`users/${UID}`);

  return ref.on('value', (snapshot) => {
    const userData = snapshot.val() || [];
    console.log('===== userData: ', userData);
    // setUserDetails(userData); // Send to reducer
  });
};

export function actionLogin(data) {
  const {
    email,
    password,
  } = data;

  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!email) return reject('Email can\'t be empty!');
    if (!password) return reject('Password can\'t be empty!');
    // Validation rules
    if (!email || email.length === 0) return reject({ message: 'Missing email' });
    if (!password || password.length === 0) {
      return reject({ message: 'Missing password' });
    }
    // Go to Firebase
    return Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    .then(() => Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log('==== logged in: res: ', res);
        const userDetails = res && res.user ? res.user : null;

        // Save the user's login data (email, UID)
        loginSuccess(userDetails);

        // Update last logged in data
        if (userDetails.uid) {
          FirebaseRef.child(`users/${userDetails.uid}`).update({
            lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
          });

          // Send verification Email when email hasn't been verified
          if (userDetails.emailVerified === false) {
            Firebase.auth().currentUser.sendEmailVerification()
              .catch(() => console.log('Verification email failed to send'));
          }

          // Get/Save User Profile (name, signed up date etc)
          listenForMemberProfileUpdates(dispatch);
        }

        return resolve();
      }).catch(reject));
  }).catch(async (err) => {
    // await statusMessage(dispatch, 'loading', false);
    console.log('===== error: ', err);
    throw err.message;
  });
}

/**
 * Update Profile
 *
 * @param {obj} formData - data from form
 * @return {Promise}
 */
export const updateProfile = (formData) => {
  const {
    email, password, password2, firstName, lastName, changeEmail, changePassword,
  } = formData;

  return new Promise(async (resolve, reject) => {
    // Are they a user?
    const UID = await Firebase.auth().currentUser.uid;
    if (!UID) return reject({ message: errorMessages.memberNotAuthd });

    // Validation rules
    if (!firstName) return reject({ message: errorMessages.missingFirstName });
    if (!lastName) return reject({ message: errorMessages.missingLastName });
    if (changeEmail) {
      if (!email) return reject({ message: errorMessages.missingEmail });
    }
    if (changePassword) {
      if (!password) return reject({ message: errorMessages.missingPassword });
      if (!password2) return reject({ message: errorMessages.missingPassword });
      if (password !== password2) return reject({ message: errorMessages.passwordsDontMatch });
    }

    // Go to Firebase
    return FirebaseRef.child(`users/${UID}`).update({ firstName, lastName })
      .then(async () => {
        // Update Email address
        if (changeEmail) {
          await Firebase.auth().currentUser.updateEmail(email).catch(reject);
        }

        // Change the Password
        if (changePassword) {
          await Firebase.auth().currentUser.updatePassword(password).catch(reject);
        }

        return resolve();
      }).catch(reject);
  }).catch((err) => { throw err.message; });
};

/**
 * Logout
 *
 * @returns {Promise}
 */
export const logout = () => {
  return new Promise((resolve, reject) => Firebase.auth().signOut()
    .then(() => {
      this.resetUser();
      resolve();
    }).catch(reject)).catch((err) => { throw err.message; });
}

/**
 * Get the current Member's Details
 *
 * @returns {Promise}
 */
export const getMemberData = () => {
  if (Firebase === null) return new Promise(resolve => resolve);

  // Ensure token is up to date
  return new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        this.listenForMemberProfileUpdates(dispatch);
        return resolve();
      }

      return new Promise(() => resolve);
    });
  });
}