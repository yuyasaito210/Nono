import * as types from '../../constants/ActionTypes'

// Reducer state
const initialState = {
  isFetching: false,
  signup: false,
  errorMessage: false,
};

export default function signupReducer(state = initialState, action) {
  switch(action.type) {
    case types.SIGNUP.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        signup: action.signup ? action.signup : state.signup,
        errorMessage: false,
      });
    case types.SIGNUP.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        signup: action.signup ? action.signup : state.signup,
        errorMessage: false,
      });
    case types.SIGNUP.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.err,
      });
    default:
      return state;
  }
}
