import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';
import AboutViewContainer from '../modules/profile/about/AboutViewContainer';

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
      key='about_us'
      hideNavBar
      component={AboutViewContainer}
      initial
    />
  </Stack>
)

export default ProfileStack;