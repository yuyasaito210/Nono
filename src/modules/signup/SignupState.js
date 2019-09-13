import * as types from '../../constants/ActionTypes'

// Reducer state
const initialState = {
  isFetching: false,
  phoneNumber: false,
  confirmCode: false,
  userName: false,
  email: false,
  birthDay: false,
  errorMessage: false,
};

export default function signupReducer(state = initialState, action) {
  switch(action.type) {
    case types.SIGNUP.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        phoneNumber: action.signup ? action.signup.phoneNumber : state.signup.phoneNumber,
        confirmCode: action.signup ? action.signup.confirmCode : state.signup.confirmCode,
        userName: action.signup ? action.signup.userName : state.signup.userName,
        email: action.signup ? action.signup.email : state.signup.email,
        birthDay: action.signup ? action.signup.birthDay : state.signup.birthDay,
        errorMessage: false,
      });
    case types.SIGNUP.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        phoneNumber: action.signup ? action.signup.phoneNumber : state.signup.phoneNumber,
        confirmCode: action.signup ? action.signup.confirmCode : state.signup.confirmCode,
        userName: action.signup ? action.signup.userName : state.signup.userName,
        email: action.signup ? action.signup.email : state.signup.email,
        birthDay: action.signup ? action.signup.birthDay : state.signup.birthDay,
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
