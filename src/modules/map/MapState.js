import * as types from '../../constants/ActionTypes'

///////////////////////////////////////////
// Reducer state
const initialState = {
  isFetching: false,
  region: false,
  places: false,
  failure: false,
  errorMessage: false,
};

export default function mapReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_STORE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        region: action.region || state.region,
        places: action.region || state.region,
        failure: false,
        errorMessage: false,
      });
    case types.GET_STORE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        region: action.region || state.region,
        places: action.region || state.region,
				fromRegistration: false,
      });
    case types.GET_STORE.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
        fromRegistration: false
      });
    case types.GET_STORE.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        region: false,
        places: false,
        failure: false,
        errorMessage: false,
      });

    default:
      return state;
  }
}