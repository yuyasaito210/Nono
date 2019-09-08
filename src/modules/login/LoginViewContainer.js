// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import LoginView from './LoginView';
import * as loginActions from './LoginAction';
import * as appActions from '../AppAction';

const mapStateToProps = state => ({
  login: state.login || {},
  app: state.app || {},
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch),
  // _t: (message) => dispatch(appActions._t(message))
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(LoginView);
