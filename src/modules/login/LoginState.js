import * as types from '../../constants/ActionTypes'

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