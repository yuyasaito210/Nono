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
import PayViewContainer from '../modules/profile/wallet/PayViewContainer';
import { ProfileHeader } from './header/header';


const ProfileStack = (
  <Stack
    key={'profile'}
  >
    <Scene
      key='profile_menu'
      hideNavBar
      component={ProfileViewContainer}
      default
    />
    <Scene
      key='wallet'
      component={WalletViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='add_promocode'
      component={AddPromoCodeViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='pay'
      hideNavBar
      component={PayViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='payment'
      component={PaymentViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='history'
      component={HistoryViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='summary'
      component={SummaryViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='setting'
      component={SettingViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='about_us'
      component={AboutViewContainer}
      header={ProfileHeader('')}
    />
    <Scene
      key='help'
      component={HelpViewContainer}
    />
  </Stack>
)

export default ProfileStack;