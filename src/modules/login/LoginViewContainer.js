// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import LoginView from './LoginView';
import * as loginActions from './LoginAction';
import { actionLogin } from './LoginState';
import { setAppOpened } from '../AppState';

const mapStateToProps = state => ({
  login: state.login || {},
  app: state.app || {},
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
  actionLogin: (data) => dispatch(actionLogin(data)),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(LoginView);
