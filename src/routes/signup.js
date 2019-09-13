import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import { View, Image, StatusBar, Platform } from 'react-native';

import SignupViewContainer from '../modules/signup/SignupViewContainer';
import SetConfirmCodeViewContainer from '../modules/signup/SetConfirmCodeViewContainer';
import SetUserNameViewContainer from '../modules/signup/SetUserNameViewContainer';
import SetEmailViewContainer from '../modules/signup/SetEmailViewContainer';
import SetBirthdayViewContainer from '../modules/signup/SetBirthdayViewContainer';
import GuidAddPaymentViewContainer from '../modules/signup/GuidAddPaymentViewContainer';
import GuidBringBackViewContainer from '../modules/signup/GuidBringBackViewContainer';
import GuidFindStationViewContainer from '../modules/signup/GuidFindStationViewContainer';
import GuidSaveViewContainer from '../modules/signup/GuidSaveViewContainer';
import GuidScanViewContainer from '../modules/signup/GuidScanViewContainer';
import GuidSponsorViewContainer from '../modules/signup/GuidSponsorViewContainer';

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
          <Icon name="arrow-back" style={styles.setHeaderCaption}/>
        </Button>
      </Left>
      <Body style={{ flex: 3 }}>
        <Title style={styles.setHeaderCaption}>{title}</Title>
      </Body>
    </Header>
  );
}

function GuidHeader(title) {
  const guidHeaderContainerStyle = [
    styles.guidHeaderContainer,
    { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight },
  ];

  return (
    <Header style={guidHeaderContainerStyle}>
      <Left style={{ flex: 2 }}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="arrow-back" style={styles.guidHeaderCaption}/>
        </Button>
      </Left>
      <Body style={{ flex: 3 }}>
        <Title style={styles.guidHeaderCaption}>{title}</Title>
      </Body>
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
            key='guidFindStation'
            title='nono'
            header={GuidHeader('nono')}
            component={GuidFindStationViewContainer}
          />
          <Scene
            back
            key='guidScan'
            title='nono'
            header={GuidHeader('nono')}
            component={GuidScanViewContainer}
          />
          <Scene
            back
            key='guidSave'
            title='nono'
            header={GuidHeader('nono')}
            component={GuidSaveViewContainer}
          />
          <Scene
            back
            key='guidBringBack'
            title='nono'
            header={GuidHeader('nono')}
            component={GuidBringBackViewContainer}
          />
          <Scene
            back
            key='guidSponsor'
            title='nono'
            header={GuidHeader('nono')}
            component={GuidSponsorViewContainer}
          />
          <Scene
            back
            key='guidAddPayment'
            title='nono'
            header={GuidHeader('nono')}
            component={GuidAddPaymentViewContainer}
          />
        </Stack>
      );

export default SignupStack;
