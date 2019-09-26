import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as appActions from '../../AppAction';
import WalletView from './WalletView';

const mapStateToProps = state => ({
  profile: state.profile || {},
  app: state.app || {},
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(WalletView);