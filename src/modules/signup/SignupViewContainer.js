import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import SignupView from './SignupView';
import * as signupActions from './SignupAction';
import * as appActions from '../AppAction';

const mapStateToProps = state => ({
  signup: state.signup || {},
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
)(SignupView);
