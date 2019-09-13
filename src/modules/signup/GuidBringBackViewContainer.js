// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import GuidBringBackView from './GuidBringBackView';
import * as signupActions from './SignupAction';
import * as appActions from '../AppAction';

const mapStateToProps = state => ({
  login: state.login || {},
  app: state.app || {},
});

const mapDispatchToProps = dispatch => ({
  signupActions: bindActionCreators(signupActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(GuidBringBackView);
