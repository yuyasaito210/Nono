import * as types from '../../constants/ActionTypes';
import { Actions } from 'react-native-router-flux';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';
///////////////////////////////////////////////////////
// Actions
export function signupRequest(email, password) {
  return {
    type: types.SIGNUP.REQUEST,
    email,
    password
  }
}

export function signupInit() {
  return {
    type: types.SIGNUP.INIT
  }
}

export function signupSuccess(payload) {
  Actions['login']();
  return {
    type: types.SIGNUP.SUCCESS,
    ...payload
  }
}

export function signupFailure(err) {
  return {
    type: types.SIGNUP.FAILURE,
    err
  }
}

///////////////////////////////////////////
// Thunk
export function actionSignUp(signup) {
  const {
    email,
    password,
    userName,
  } = signup;

  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!userName) return reject('User name can\'t be empty!');
    if (!email) return reject('Email can\'t be empty!');
    if (!password) return reject('Password can\'t be empty!');
    // Go to Firebase
    return Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Send user details to Firebase database
        if (res && res.user.uid) {
          FirebaseRef.child(`users/${res.user.uid}`).set({
            userName,
            signedUp: Firebase.database.ServerValue.TIMESTAMP,
            lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
          }).then(resolve);
          signupSuccess(signup);
        }
      }).catch(reject);
  }).catch(async (err) => {
    await statusMessage(dispatch, 'loading', false);
    console.log('===== error: ', err);
    throw err.message;
  });
}