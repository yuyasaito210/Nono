import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';
import AboutViewContainer from '../modules/profile/about/AboutViewContainer';
import HelpViewContainer from '../modules/profile/help/HelpViewContainer';
import SettingViewContainer from '../modules/profile/setting/SettingViewContainer';
import PaymentViewContainer from '../modules/profile/payment/PaymentViewContainer';

const ProfileStack = (
  <Stack
    key={'profile'}
    initial
  >
    <Scene
      key='profile_menu'
      hideNavBar
      component={ProfileViewContainer}
      
    />
    <Scene
      key='payment'
      hideNavBar
      component={PaymentViewContainer}
      initial
    />
    <Scene
      key='setting'
      hideNavBar
      component={SettingViewContainer}
      
    />
    <Scene
      key='about_us'
      hideNavBar
      component={AboutViewContainer}
      
    />
    <Scene
      key='help'
      hideNavBar
      component={HelpViewContainer}
      
    />
  </Stack>
)

export default ProfileStack;