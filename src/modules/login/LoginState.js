import AuthAPI from '../../api/auth';
import { AsyncStorage } from 'react-native';

const AUTH_LOGGING_IN = 'AuthState/AUTH_LOGGING_IN';
const AUTH_LOG_IN_SUCCESS = 'AuthState/AUTH_LOG_IN_SUCCESS';
const AUTH_LOG_IN_FAILED = 'AuthState/AUTH_LOG_IN_FAILED';
const AUTH_LOGGED_OUT = 'AuthState/AUTH_LOGGED_OUT';

// Action creators
function startLoggingIn(data) {
  console.log('===== startLoggingIn: data: ', data);
  return { 
    type: AUTH_LOGGING_IN, 
    data,
  };
}

function successLoggedIn(data) {
  return {
    type: AUTH_LOG_IN_SUCCESS,
    data,
  };
}

function failedLoggedIn(data) {
  return {
    type: AUTH_LOG_IN_FAILED,
    data,
  };
}

function logOut() {
  return { type: AUTH_LOGGED_OUT };
}

export function actionLoggingIn(data) {
  console.log('====== actionLoggingIn: data: ', data)
  const { userName, email, password } = data;
  return dispatch => {
    dispatch(startLoggingIn(data));
    dispatch(actionLogin(data));
  };
}

export function actionLogin(data) {
  const { userName, email, password } = data;

  return dispatch => new Promise(async (resolve, reject) => {
    // Validation checks
    if (!userName) return reject('User name can\'t be empty!');
    if (!password) return reject('Password can\'t be empty!');

    // await statusMessage(dispatch, 'loading', true);
    try {
      const authData = await AuthAPI.login(email, password);
      if (authData && authData.user_details && authData.user_details.length) {
        const dt = authData.user_details[0];
        await AsyncStorage.setItem('loggedIn', '1');
        dispatch({
          type: 'USER_DETAILS_UPDATE',
          data: dt,
        });
      }
      // await statusMessage(dispatch, 'loading', false);
      resolve(authData);
    } catch (error) {
      reject(error);
    }
  }).catch(async (err) => {
    // await statusMessage(dispatch, 'loading', false);
    throw err.message;
  });
}

export function actionSuccessLogIn(data) {
  return dispatch => {
    dispatch(successLoggedIn(data));
  };
}

export function actionFailedLoggedIn(data) {
  return dispatch => {
    dispatch(failedLoggedIn(data));
  };
}

export function actionLogdOut(data) {
  return dispatch => {
    dispatch(logOut(data));
  };
}

const initialState = {
  data: null,
  isLoading: false,
  isLoggedIn: false,
  hasSkippedLogin: false,
  errorMessage: null
};

export default function AuthStateReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGGING_IN:
      return Object.assign({}, state, {
        isLoading: true,
        isLoggedIn: true, // for test
        data: action.data,
        errorMessage: null
      });
    case AUTH_LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        data: action.data,
        errorMessage: null
      });
    case AUTH_LOG_IN_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        data: action.data,
        errorMessage: action.data.errorMessage
      });
    case AUTH_LOGGED_OUT:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
        data: action.data,
        errorMessage: null
      });  
    default:
      return state;
  }
}
