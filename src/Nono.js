// import { Provider } from 'react-redux';
// import React from 'react';
// import { View, ActivityIndicator, StyleSheet } from 'react-native';
// import { PersistGate } from 'redux-persist/integration/react';
// import { colors } from './styles';

// import { store, persistor } from './redux/store';

// import AppView from './modules/AppViewContainer';

// export default function Nono() {
//   return (
//     <Provider store={store}>
//       <PersistGate
//         loading={
//           <View style={styles.container}>
//             <ActivityIndicator color={colors.red} />
//           </View>
//         }
//         persistor={persistor}
//       >
//         <AppView />
//       </PersistGate>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });

import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import store from './redux/store';
import NonoRoutes from './routes/index';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default class Nono extends Component {
  constructor() {
    super();
    this.state = {
			loadingExpo: true,
      isLoading: true,
      store: store(() => this.setState({isLoading: false}))
    };
  }

  async componentWillMount() {
    await Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
    ]);
    await Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
      'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
      'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
      'Lato-SemiBold': require('../assets/fonts/Lato-Semibold.ttf'),
      // Roboto: require("native-base/Fonts/Roboto.ttf"),
	    // Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      // Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    // await Font.loadAsync({
	  //   Roboto: require("native-base/Fonts/Roboto.ttf"),
	  //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    // });
    this.setState({ loadingExpo: false });
  }

  render() {
    if (this.state.loadingExpo) {
      return <AppLoading />;
    }
		if (this.state.isLoading) {
			return null;
		}

    return (
      <Provider store={this.state.store}>
				<SafeAreaView style={styles.safeArea}>
					<StyleProvider style={getTheme(material)}>
	        	<NonoRoutes />
					</StyleProvider>
				</SafeAreaView>
      </Provider>
    );
  }
}

registerRootComponent(Nono);
