import * as types from '../../constants/ActionTypes'

///////////////////////////////////////////
// Reducer state
const initialState = {
  isFetching: false,
  batteries: false,
  selectedButtery: false,
  errorMessage: false,
};

export default function rentButteryReducer(state = initialState, action) {
  switch(action.type) {
    case types.RENT_BUTTERY.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        selectedButtery: action.selectedButtery || state.selectedButtery,
        failure: false,
        errorMessage: false,
      });
    case types.RENT_BUTTERY.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        selectedButtery: action.selectedButtery || state.selectedButtery,
      });
    case types.RENT_BUTTERY.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
      });
    case types.RENT_BUTTERY.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        batteries: false,
        selectedButtery: false,
        failure: false,
        errorMessage: false,
      });

    default:
      return state;
  }
}