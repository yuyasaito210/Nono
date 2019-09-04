import * as types from '../../constants/ActionTypes';
///////////////////////////////////////////////////////
// Actions

// Get profile
export function getProfileRequest() {
  return {
    type: types.GET_PROFILE.REQUEST
  }
}

export function getProfileInit() {
  return {
    type: types.GET_PROFILE.INIT
  }
}

export function getProfileSuccess(payload) {
  return {
    type: types.GET_PROFILE.SUCCESS,
    ...payload
  }
}

export function getProfileFailure(err) {
  return {
    type: types.GET_PROFILE.FAILURE,
    err
  }
}

/////////////////////////////////////////////////
// Set profile
export function setProfileRequest(profile) {
  return {
    type: types.SET_PROFILE.REQUEST,
    profile
  }
}

export function setProfileInit() {
  return {
    type: types.SET_PROFILE.INIT
  }
}

export function setProfileSuccess(payload) {
  return {
    type: types.SET_PROFILE.SUCCESS,
    ...payload
  }
}

export function setProfileFailure(err) {
  return {
    type: types.SET_PROFILE.FAILURE,
    err
  }
}
