import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar, Platform } from 'react-native';
import NonoRoutes from '../routes/index';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default class AppView extends Component {
  state = {};

  componentWillMount() {
    this.props.appActions.setLanguage('fr');
  }

  render() {
    return (
      <View style={styles.safeArea}>
        <StyleProvider style={getTheme(material)}>
          <View style={ styles.container }>
            {/* <StatusBar
              barStyle={ `${ Platform.OS === 'ios' ? 'dark-content' : 'light-content' }` }
            /> */}
            <NonoRoutes />
          </View>
        </StyleProvider>
      </View>
    );
  }
}
