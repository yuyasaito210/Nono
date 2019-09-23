import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import MapSection from './MapSection';
import * as mapSectionActions from './MapSectionAction';
import * as appActions from '../../AppAction';

const mapStateToProps = state => ({
  map: state.map || {},
});

const mapDispatchToProps = dispatch => ({
  mapSectionActions: bindActionCreators(mapSectionActions, dispatch),
  appActions:  bindActionCreators(appActions, dispatch),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(MapSection);