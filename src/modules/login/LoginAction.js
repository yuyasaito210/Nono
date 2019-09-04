import * as types from '../../constants/ActionTypes';
import { Actions } from 'react-native-router-flux'
///////////////////////////////////////////////////////
// Actions
export function loginRequest(email, password) {
  return {
    type: types.LOGIN.REQUEST,
    email,
    password
  }
}

export function loginInit() {
  return {
    type: types.LOGIN.INIT
  }
}

export function loginSuccess(payload) {
  Actions['authorized']();
  return {
    type: types.LOGIN.SUCCESS,
    ...payload
  }
}

export function loginFailure(err) {
  return {
    type: types.LOGIN.FAILURE,
    err
  }
}

export function logoutRequest(payload) {
  loginInit()
  Actions['login']()
  return {
    type: types.LOGOUT.REQUEST
  }
}

export function logoutSuccess(payload) {
  loginInit()
  Actions['login']()
  return {
    type: types.LOGOUT.SUCCESS
  }
}

export function logoutFailure(payload) {
  loginInit()
  Actions['login']()
  return {
    type: types.LOGOUT.FAILURE
  }
}