import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import RentButteryView from './RentButteryView';
import * as rentButteryActions from './RentButteryAction';
import { actionRentButteries, actionSelectedButtery } from './RentButteryState';

const mapStateToProps = state => ({
  selectedBattery: state.selectedBattery || {},
  butteries: state.butteries || {},
});

const mapDispatchToProps = dispatch => ({
  rentButteryActions: bindActionCreators(rentButteryActions, dispatch),
  actionRentButteries: (store) => dispatch(actionRentButteries(store)),
  actionSelectedButtery: (selectedBattery) => dispatch(actionSelectedButtery(selectedBattery)),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(RentButteryView);