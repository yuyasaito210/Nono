import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import ReservableListDialog from './ReservableListDialog';
import * as appActions from '../../AppAction';

const mapStateToProps = state => ({
  map: state.map || {},
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(ReservableListDialog);