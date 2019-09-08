const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const INIT 		= 'INIT';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, INIT].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

export const SET_FIRST_OPEN = 'AppState/SET_FIRST_OPEN';
export const SET_LANGUAGE = 'AppState/SET_LANGUAGE';
// Login events
export const LOGIN = createRequestTypes('Auth/LOGIN');
export const LOGOUT = createRequestTypes('Auth/LOGOUT');
export const SIGNUP = createRequestTypes('Auth/SIGNUP');
export const LOGIN_FROM_REGISTRATION = createRequestTypes('AUTH/LOGIN_FROM_REGISTRATION');
export const SET_USER_INFO = 'SET_USER_INFO';
export const GET_STORE = createRequestTypes('GET_STORE');
export const SET_PRODUCTION = 'SET_PRODUCTION';
export const RENT_BATTERRY = createRequestTypes('RENT_BATTERRY');
export const RATE_BATTERRY = createRequestTypes('RATE_BATTERRY');
export const GET_PROFILE = createRequestTypes('GET_PROFILE');
export const SET_PROFILE = createRequestTypes('SET_PROFILE');
