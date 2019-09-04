import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginViewContainer from '../modules/login/LoginViewContainer';
import SignupViewContainer from '../modules/signup/SignupViewContainer';
import HomeViewContainer from '../modules/home/HomeViewContainer';
import MapScreen from '../modules/map/MapView';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';

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
    Profile: {
      screen: ProfileViewContainer,
      navigationOptions: {
        title: 'Profile',
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
    screen: LoginViewContainer,
    navigationOptions: {
      header: null,
    }
  },
 });

 const SignupStack = createStackNavigator({
  Signup: {
    screen: SignupViewContainer,
    navigationOptions: {
      header: null,
    }
  }
});

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Signup: SignupStack,
    Home: homeStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(AppNavigator);
