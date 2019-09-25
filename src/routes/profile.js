import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';
import AboutViewContainer from '../modules/profile/about/AboutViewContainer';
import HelpViewContainer from '../modules/profile/help/HelpViewContainer';
import SettingViewContainer from '../modules/profile/setting/SettingViewContainer';
import PaymentViewContainer from '../modules/profile/payment/PaymentViewContainer';
import HistoryViewContainer from '../modules/profile/history/HistoryViewContainer';
import SummaryViewContainer from '../modules/profile/history/SummaryViewContainer';
import WalletViewContainer from '../modules/profile/wallet/WalletViewContainer';
import AddPromoCodeViewContainer from '../modules/profile/wallet/AddPromoCodeViewContainer';

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
      key='wallet'
      hideNavBar
      component={WalletViewContainer}
      
    />
    <Scene
      key='add_promocode'
      hideNavBar
      component={AddPromoCodeViewContainer}
      initial
    />
    <Scene
      key='payment'
      hideNavBar
      component={PaymentViewContainer}
      
    />
    <Scene
      key='history'
      hideNavBar
      component={HistoryViewContainer}
      
    />
    <Scene
      key='summary'
      hideNavBar
      component={SummaryViewContainer}
      
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