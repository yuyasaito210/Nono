// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import SignupView from './SignupView';
import { actionSignUp } from './SignupState';

export default compose(
  connect(
    state => ({
      signup: state.signup,
    }),
    dispatch => ({
      actionSignUp: (data) => dispatch(actionSignUp(data)),
      actionSuccessSignUp: (data) => dispatch(actionSuccessLogIn(data)),
      actionFailedLoggedIn: (data) => dispatch(actionFailedLoggedIn(data)),
    }),
  ),
)(SignupView);
