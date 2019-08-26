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
  return dispatch => {
    dispatch(startLoggingIn(data));
  };
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
