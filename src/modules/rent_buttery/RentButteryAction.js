import * as types from '../../constants/ActionTypes';
///////////////////////////////////////////////////////
// Actions
export function rentButteryRequest(battery) {
  return {
    type: types.RENT_BUTTERY.REQUEST,
    battery
  }
}

export function rentButteryInit() {
  return {
    type: types.RENT_BUTTERY.INIT
  }
}

export function rentButterySuccess(payload) {
  return {
    type: types.RENT_BUTTERY.SUCCESS,
    ...payload
  }
}

export function rentButteryFailure(err) {
  return {
    type: types.RENT_BUTTERY.FAILURE,
    err
  }
}
