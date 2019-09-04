import * as types from '../../constants/ActionTypes';
///////////////////////////////////////////////////////
// Actions
export function getStoreRequest(region) {
  return {
    type: types.GET_STORE.REQUEST,
    region
  }
}

export function getStoreInit() {
  return {
    type: types.GET_STORE.INIT
  }
}

export function getStoreSuccess(payload) {
  return {
    type: types.GET_STORE.SUCCESS,
    ...payload
  }
}

export function getStoreFailure(err) {
  return {
    type: types.GET_STORE.FAILURE,
    err
  }
}
