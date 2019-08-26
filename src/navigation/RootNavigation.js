import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import AuthViewContainer from '../modules/auth/AuthViewContainer';
import HomeViewContainer from '../modules/home/HomeViewContainer';
import MapScreen from '../modules/map/MapView';
import LinksScreen from '../modules/links/LinksView';
import SettingsScreen from '../modules/settings/SettingsView';

import { colors, fonts } from '../styles';

const headerBackground = require('../../assets/images/topBarBg.png');

const homeStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: 'React Native Starter',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{ flex: 1 }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Home: {
      screen: HomeViewContainer,
      navigationOptions: {
        title: 'Home',
      },
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        title: 'Map',
      },
    },
    Links: {
      screen: LinksScreen,
      navigationOptions: {
        title: 'Links',
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

const AuthStack = createStackNavigator({
  Auth: {
    screen: AuthViewContainer,
    navigationOptions: {
      header: null,
    }
  }
 });

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Home: homeStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AppNavigator);
