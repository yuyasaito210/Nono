const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const INIT 		= 'INIT';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, INIT].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = createRequestTypes('LOGOUT');
export const REGISTER = createRequestTypes('REGISTER');
export const LOGIN_FROM_REGISTRATION = createRequestTypes('LOGIN_FROM_REGISTRATION');
export const SET_USER_INFO = 'SET_USER_INFO';
export const GET_STORE = createRequestTypes('GET_STORE');
export const SET_PRODUCTION = 'SET_PRODUCTION';
export const RENT_BATTERRY = createRequestTypes('RENT_BATTERRY');
export const RATE_BATTERRY = createRequestTypes('RATE_BATTERRY');
export const GET_PROFILE = createRequestTypes('GET_PROFILE');
export const SET_PROFILE = createRequestTypes('SET_PROFILE');
