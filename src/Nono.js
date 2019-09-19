// import { registerRootComponent, AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import { Asset } from 'expo-asset';
// import { Ionicons } from '@expo/vector-icons';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, SafeAreaView, View, Text, StatusBar, Platform, ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import AppViewContainer from './modules/AppViewContainer';

import { fonts, colors } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
    // await Font.loadAsync({
    //   // This is the font that we are using for our tab bar
    //   ...Ionicons.font,
    //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    //   // remove this if you are not using it in your app
    //   'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    //   'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    //   'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    //   'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    //   'Lato-SemiBold': require('../assets/fonts/Lato-Semibold.ttf'),
    //   // Roboto: require("native-base/Fonts/Roboto.ttf"),
	  //   // Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   // Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    // });
    this.setState({ loadingExpo: false });
  }

  render() {
    if (this.state.loadingExpo) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color={colors.red} />
        </View>
      );
    }
		// if (this.state.isLoading) {
		// 	return null;
		// }

    return (
      <Provider store={this.state.store}>
				<AppViewContainer />
      </Provider>
    );

  }
}

// registerRootComponent(Nono);
