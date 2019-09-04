import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import ProfileView from './ProfileView';
import * as profileActions from './ProfileAction';
import { actionGetProfile, actionSetProfile } from './ProfileState';

const mapStateToProps = state => ({
  profile: state.profile || {},
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(profileActions, dispatch),
  actionGetProfile: () => dispatch(actionGetProfile()),
  actionSetProfile: (profile) => dispatch(actionSetProfile(profile)),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(ProfileView);