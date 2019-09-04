// import { compose, withState } from 'recompose';

// import MapScreen from './MapView';

// export default compose(withState(region, places))(
//     MapScreen,
// );

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import MapView from './MapView';
import * as mapActions from './MapAction';

const mapStateToProps = state => ({
  map: state.map || {},
});

const mapDispatchToProps = dispatch => ({
  mapActions: bindActionCreators(mapActions, dispatch)
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  )
)(MapView);