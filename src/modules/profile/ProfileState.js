import * as types from '../../constants/ActionTypes'

///////////////////////////////////////////
// Reducer state
const initialState = {
  isFetching: false,
  profile: false,
  errorMessage: false,
};

export default function rentButteryReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_PROFILE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        profile: action.profile || state.profile,
        errorMessage: false,
      });
    case types.GET_PROFILE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile || state.profile,
        errorMessage: false,
      });
    case types.GET_PROFILE.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.err,
      });
    case types.GET_PROFILE.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        profile: false,
        errorMessage: false,
      });
    /////////////////////////////////////////////
    // Set profile
    case types.SET_PROFILE.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        profile: action.profile,
        errorMessage: false,
      });
    case types.SET_PROFILE.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        profile: action.profile || state.profile,
        errorMessage: false,
      });
    case types.SET_PROFILE.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.err,
      });
    case types.SET_PROFILE.INIT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        profile: false,
        errorMessage: false,
      });
    default:
      return state;
  }
}