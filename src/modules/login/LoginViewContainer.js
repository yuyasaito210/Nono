// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import LoginView from './LoginView';
import { 
  actionLoggingIn,
  actionSuccessLogIn,
  actionFailedLoggedIn,
  actionLogOut
} from './LoginState';
import { setAppOpened } from '../AppState';

export default compose(
  connect(
    state => ({
      login: state.login,
      app: state.app
    }),
    dispatch => ({
      actionLoggingIn: (data) => dispatch(actionLoggingIn(data)),
      actionSuccessLogIn: (data) => dispatch(actionSuccessLogIn(data)),
      actionFailedLoggedIn: (data) => dispatch(actionFailedLoggedIn(data)),
      actionLogOut: (data) => dispatch(actionLogOut(data)),
      setAppOpened: () => dispatch(setAppOpened())
    }),
  ),
  // lifecycle({
  //   componentDidMount() {
  //     this.props.loadChartsData();
  //   },
  // }),
)(LoginView);
