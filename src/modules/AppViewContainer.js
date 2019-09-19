// import { compose, lifecycle } from 'recompose';
// import { Platform, UIManager, StatusBar } from 'react-native';

// import AppView from './AppView';

// export default compose(

//   lifecycle({
//     componentWillMount() {
//       StatusBar.setBarStyle('light-content');
//       if (Platform.OS === 'android') {
//         // eslint-disable-next-line no-unused-expressions
//         UIManager.setLayoutAnimationEnabledExperimental &&
//           UIManager.setLayoutAnimationEnabledExperimental(true);
//       }
//     },
//   }),
// )(AppView);

// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Platform, UIManager, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import AppView from './AppView';
import * as AppActions from './AppAction';

const mapStateToProps = state => ({
  app: state.app || {},
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
});

export default compose(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  ),
  lifecycle({
    componentWillMount() {
      StatusBar.setBarStyle('light-content');
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
