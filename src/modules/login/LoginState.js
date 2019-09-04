import * as types from '../../constants/ActionTypes'
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
import * as loginActions from './LoginAction';

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
        loginActions.loginSuccess(userDetails);

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

///////////////////////////////////////////
// Reducer state
const initialState = {
  isAuthenticated: false,
  isFetching: false,
  access_token: '',
  token_type: '',
  expires_in: 0,
  email: '',
  password: '',
  errorMessage: false,
	fromRegistration: false,
};

export default function loginReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: false,
        email: action.email ? action.email : state.email,
        password: action.password ? action.password: state.password,
				fromRegistration: false,
      });
    case types.LOGIN.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        access_token: action.access_token,
        email: action.email ? action.email : state.email,
				token_type: action.token_type,
				fromRegistration: false,
      });
    case types.LOGIN.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
        access_token: '',
				fromRegistration: false
      });
    case types.LOGIN.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        access_token: '',
        token_type: '',
        expires_in: 0,
        errorMessage: false,
				fromRegistration: false
      });
		case types.LOGIN_FROM_REGISTRATION.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: false,
        email: action.email ? action.email : state.email,
        password: action.password ? action.password: state.password,
				fromRegistration: true
      });
    case types.LOGIN_FROM_REGISTRATION.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        access_token: action.access_token,
        token_type: action.token_type,
        email: action.email ? action.email : state.email,
				fromRegistration: true
      });
    case types.LOGIN_FROM_REGISTRATION.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        access_token: '',
        token_type: '',
        email: action.email ? action.email : state.email,
        password: action.password ? action.password: state.password,
        errorMessage: action.err,
				fromRegistration: true
      });
    case types.LOGIN_FROM_REGISTRATION.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        access_token: '',
        token_type: '',
        expires_in: 0,
        errorMessage: false,
				fromRegistration: true
      });
    case types.LOGOUT.REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				errorMessage: false,
        access_token: '',
        token_type: '',
				fromRegistration: false
			});
    case types.LOGOUT.SUCCESS:
    case types.LOGOUT.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: false,
        access_token: '',
        token_type: '',
        fromRegistration: false
      });
    default:
      return state;
  }
}

export function getAccessToken(state) {
  if (state.access_token) {
    return state.access_token
  }
}

export function getTokenType(state) {
  if (state.token_type) {
    return state.token_type
  }
}

///////////////////////////////////////////////////////
// export function actionLoggingIn(data) {
//   console.log('====== actionLoggingIn: data: ', data)
//   const { email, email, password } = data;
//   return dispatch => {
//     dispatch(startLoggingIn(data));
//     dispatch(actionLogin(data));
//   };
// }

// export function actionLogin(data) {
//   const { email, email, password } = data;

//   return dispatch => new Promise(async (resolve, reject) => {
//     // Validation checks
//     if (!email) return reject('User name can\'t be empty!');
//     if (!password) return reject('Password can\'t be empty!');

//     // await statusMessage(dispatch, 'loading', true);
//     try {
//       const authData = await AuthAPI.login(email, password);
//       if (authData && authData.user_details && authData.user_details.length) {
//         const dt = authData.user_details[0];
//         await AsyncStorage.setItem('loggedIn', '1');
//         dispatch({
//           type: 'USER_DETAILS_UPDATE',
//           data: dt,
//         });
//       }
//       // await statusMessage(dispatch, 'loading', false);
//       resolve(authData);
//     } catch (error) {
//       reject(error);
//     }
//   }).catch(async (err) => {
//     // await statusMessage(dispatch, 'loading', false);
//     throw err.message;
//   });
// }

// export function actionSuccessLogIn(data) {
//   return dispatch => {
//     dispatch(successLoggedIn(data));
//   };
// }

// export function actionFailedLoggedIn(data) {
//   return dispatch => {
//     dispatch(failedLoggedIn(data));
//   };
// }

// export function actionLogdOut(data) {
//   return dispatch => {
//     dispatch(logOut(data));
//   };
// }

// const initialState = {
//   data: null,
//   isLoading: false,
//   isLoggedIn: false,
//   hasSkippedLogin: false,
//   errorMessage: null
// };

// export default function AuthStateReducer(state = initialState, action) {
//   switch (action.type) {
//     case AUTH_LOGGING_IN:
//       return Object.assign({}, state, {
//         isLoading: true,
//         isLoggedIn: true, // for test
//         data: action.data,
//         errorMessage: null
//       });
//     case AUTH_LOG_IN_SUCCESS:
//       return Object.assign({}, state, {
//         isLoading: false,
//         isLoggedIn: true,
//         data: action.data,
//         errorMessage: null
//       });
//     case AUTH_LOG_IN_FAILED:
//       return Object.assign({}, state, {
//         isLoading: false,
//         isLoggedIn: false,
//         data: action.data,
//         errorMessage: action.data.errorMessage
//       });
//     case AUTH_LOGGED_OUT:
//       return Object.assign({}, state, {
//         isLoading: false,
//         isLoggedIn: false,
//         data: action.data,
//         errorMessage: null
//       });  
//     default:
//       return state;
//   }
// }
