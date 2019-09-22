// import { compose, withState } from 'recompose';

// import MapScreen from './MapView';

// export default compose(withState(region, places))(
//     MapScreen,
// );

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import UnlockBox from './UnlockBox';
import * as appActions from '../../AppAction';

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
)(UnlockBox);