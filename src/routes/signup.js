import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import { View, Image, StatusBar, Platform } from 'react-native';

import SignupViewContainer from '../modules/signup/SignupViewContainer';
import SetConfirmCodeViewContainer from '../modules/signup/SetConfirmCodeViewContainer';
import SetUserNameViewContainer from '../modules/signup/SetUserNameViewContainer';
import SetEmailViewContainer from '../modules/signup/SetEmailViewContainer';
import SetBirthdayViewContainer from '../modules/signup/SetBirthdayViewContainer';
import GuideAddPaymentViewContainer from '../modules/signup/GuideAddPaymentViewContainer';
import GuideBringBackViewContainer from '../modules/signup/GuideBringBackViewContainer';
import GuideFindStationViewContainer from '../modules/signup/GuideFindStationViewContainer';
import GuideSaveViewContainer from '../modules/signup/GuideSaveViewContainer';
import GuideScanViewContainer from '../modules/signup/GuideScanViewContainer';
import GuideSponsorViewContainer from '../modules/signup/GuideSponsorViewContainer';

import { Header, Left, Button, Icon, Body, Right, Text, Title } from 'native-base';

import styles from './styles';

function SetInfoHeader(title) {
  const setHeaderContainerStyle = {
    ...styles.setHeaderContainer,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  };

  return (
    <Header style={setHeaderContainerStyle}>
      <Left style={{ flex: 2 }}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.setHeaderCaption}/>
        </Button>
      </Left>
      <Body style={{ flex: 3 }}>
        <Title style={styles.setHeaderCaption}>{title}</Title>
      </Body>
    </Header>
  );
}

function GuideHeader(title) {
  const guideHeaderContainerStyle = [
    styles.guideHeaderCommon,
    styles.guideHeaderContainer,
    { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight },
  ];

  return (
    <Header style={guideHeaderContainerStyle}>
      <Left style={{ flex: 2 }}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-back" style={[styles.guideHeaderCommon, styles.guideHeaderLeft]}/>
        </Button>
      </Left>
      <Body style={{ flex: 3 }}>
        <Title style={[styles.guideHeaderCommon, styles.guideHeaderCaption]}>{title}</Title>
      </Body>
      <Right style={{ flex: 2 }}>
        <Button transparent onPress={() => Actions['map']()}>
          <Icon name="close" style={[styles.guideHeaderCommon, styles.guideHeaderRight]}/>
        </Button>
      </Right>
    </Header>
  );
}

const SignupStack = (
        <Stack
          key={'signup'}
          tabBarLabel="Sign Up"
          default
        >
          <Scene
            key='signup'
            title='Create Account'
            hideNavBar
            component={SignupViewContainer}
          />
          <Scene
            back
            key='setConfirmCode'
            analyticsDesc='Confirm code'
            header={SetInfoHeader('')}
            component={SetConfirmCodeViewContainer}
          />
          <Scene
            back
            key='setUserName'
            analyticsDesc='Input your name'
            header={SetInfoHeader('')}
            component={SetUserNameViewContainer}
          />
          <Scene
            back
            key='setEmail'
            analyticsDesc='Input your email'
            header={SetInfoHeader('')}
            component={SetEmailViewContainer}
          />
          <Scene
            back
            key='setBirthday'
            analyticsDesc='Input your birthday'
            header={SetInfoHeader('')}
            component={SetBirthdayViewContainer}
          />
          <Scene
            back
            key='guideFindStation'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideFindStationViewContainer}
          />
          <Scene
            back
            key='guideScan'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideScanViewContainer}
          />
          <Scene
            back
            key='guideSave'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideSaveViewContainer}
          />
          <Scene
            back
            key='guideBringBack'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideBringBackViewContainer}
          />
          <Scene
            back
            key='guideSponsor'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideSponsorViewContainer}
          />
          <Scene
            back
            key='guideAddPayment'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideAddPaymentViewContainer}
          />
        </Stack>
      );

export default SignupStack;
