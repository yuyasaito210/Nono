// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AuthView from './AuthView';
import { 
  actionLoggingIn,
  actionSuccessLogIn,
  actionFailedLoggedIn,
  actionLogOut
} from './AuthState';
import { setAppOpened } from '../AppState';

export default compose(
  connect(
    state => ({
      auth: state.auth,
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
)(AuthView);
