import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as appActions from '~/modules/AppAction';
import ScanQRCode from './ScanQRCode';

const mapStateToProps = state => ({
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
)(ScanQRCode);