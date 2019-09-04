import React from 'react';
import { Image, View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { colors } from '../styles';

import TabBarIcon from '../components/TabBarIcon';
import HomeViewContainer from '../modules/home/HomeViewContainer';
import MapViewContainer from '../modules/map/MapViewContainer';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';

import styles from './styles';

const iconHome = require('../../assets/images/tabbar/home.png');
const iconCalendar = require('../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../assets/images/tabbar/grids.png');
const iconPages = require('../../assets/images/tabbar/pages.png');
const iconComponents = require('../../assets/images/tabbar/components.png');
const hederBackground = require('../../assets/images/topBarBg.png');


export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeViewContainer,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
          />
        ),
        header: null,
      },
    },
    Map: {
      screen: MapViewContainer,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
          />
        ),
        header: null,
      },
    },
    Porfile: {
      screen: ProfileViewContainer,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon 
            focused={focused} name={
              Platform.OS === 'ios' 
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
            }
          />
        ),
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Profile</Text>
          </View>
        ),
      },
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Map':
            iconSource = iconCalendar;
            break;
          case 'Profile':
            iconSource = iconPages;
            break;
          default:
            iconSource = iconComponents;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
