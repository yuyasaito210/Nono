import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import ProfileView from './ProfileView';
import * as profileActions from './ProfileAction';

const mapStateToProps = state => ({
  profile: state.profile || {},
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(profileActions, dispatch)
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(ProfileView);