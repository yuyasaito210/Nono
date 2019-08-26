import AuthAPI from '../../api/auth';
import { Firebase, FirebaseRef } from '../../lib/firebase';
import { statusMessage } from '../status/StatusState';

const SIGNNING_UP = 'AuthState/SIGNNING_UP';
const SIGN_UP_SUCCESS = 'AuthState/SIGN_UP_SUCCESS';
const SIGN_UP_FAILED = 'AuthState/SIGN_UP_FAILED';

// Action creators
function startSignup(data) {
  console.log('===== startSignup: data: ', data);
  return { 
    type: SIGNNING_UP, 
    data,
  };
}

function successSignup(data) {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  };
}

function failedSignup(data) {
  return {
    type: SIGN_UP_FAILED,
    data,
  };
}

export function actionSignUp(data) {
  const {
    email,
    password,
    userName,
  } = data;

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
        }
      }).catch(reject);
  }).catch(async (err) => {
    await statusMessage(dispatch, 'loading', false);
    console.log('===== error: ', err);
    throw err.message;
  });
}

const initialState = {
  data: null,
  isLoading: false,
  isSignedup: false,
  errorMessage: null
};

export default function SignupStateReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNNING_UP:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: false,
        data: action.data,
        errorMessage: null
      });
    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isSignedup: true,
        data: action.data,
        errorMessage: null
      });
    case SIGN_UP_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isSignedup: false,
        data: action.data,
        errorMessage: action.data.errorMessage
      });
    default:
      return state;
  }
}
