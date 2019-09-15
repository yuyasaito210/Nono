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

export function signupSetConfirmCode(confirmCode) {
  return {
    type: types.SINGUP_SET_CONFIRM_CODE,
    confirmCode,
  }
}

export function signupSetUserName(userName) {
  return {
    type: types.SINGUP_SET_USER_NAME,
    userName,
  }
}

export function signupSetEmail(email) {
  return {
    type: types.SINGUP_SET_EMAIL,
    email,
  }
}

export function signupSetBirthday(birthDay) {
  return {
    type: types.SINGUP_SET_BIRTHDAY,
    birthDay,
  }
}

///////////////////////////////////////////
// Thunk
export function actionSignUp(signup) {
  const {
    phoneNumber,
    confirmCode,
    email,
    userName,
    birthDay
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