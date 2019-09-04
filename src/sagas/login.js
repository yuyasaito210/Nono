import { take, put, call, fork } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { Firebase, FirebaseRef } from '../lib/firebase';
import * as types from '../constants/ActionTypes';
import {
  loginInit, loginSuccess, loginFailure,
  logoutSuccess, logoutFailure
} from '../modules/login/LoginAction';


function loginCall({email, password}) {
  return new Promise((resolve, reject) => {
    // Validation checks
    if (!email) return reject('User name can\'t be empty!');
    if (!password) return reject('Password can\'t be empty!');

    // Go to Firebase
    return Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    .then(() => Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log('======= login: res: ', res);
        const userDetails = res && res.user ? res.user : null;

        // Save the user's login data (email, UID)
        this.setUserLogin(userDetails);

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
          this.listenForMemberProfileUpdates(dispatch);
        }

        return resolve();
      }).catch(reject));
  }).catch(async (err) => {
    // await statusMessage(dispatch, 'loading', false);
    throw err.message;
  });
}

function logoutCall() {
  return new Promise((resolve, reject) => {
		// headers = apiConfig.formHeaders
		// // headers[apiConfig.authenticationHeaderName] = `${token_type} ${access_token}`
    // fetch(`${apiConfig.url}/api/Account/Logout`, {
    //   credentials: 'include',
    //   method: 'post',
    //   headers: headers,
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.error) {
    //       reject({ status: response.error_description || response.error })
    //     } else {
    //       resolve(response)
    //     }
    //   })
    //   .catch(error => {
    //     reject({ status: error.message })
    //   })
  })
}

function *watchLoginRequest() {
  while(true) {
    const { email, password } = yield take(types.LOGIN.REQUEST);
    try {
      const payload = {
				email,
				password
      }
      const response = yield call(loginCall, payload);

      yield put(loginSuccess(response));
      // yield put(userInit());
      // yield put(userRequest(response.access_token, response.token_type));
    } catch (err) {
      yield put(loginFailure(err.status));
    }
  }
}

function *watchLogoutRequest() {
  while(true) {
    yield take(types.LOGOUT.REQUEST);
    try {
      const payload = {
        userName,
        password,
      }
      const response = yield call(logoutCall, payload);
      yield put(logoutSuccess(response));
      yield put(loginInit());
    } catch (err) {
      yield put(logoutFailure(err.status));
    }
  }
}


export default function* root() {
  yield fork(watchLoginRequest);
	yield fork(watchLogoutRequest);
}
