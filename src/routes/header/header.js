import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import { View, Image, StatusBar, Platform } from 'react-native';

import { Header, Left, Button, Icon, Body, Right, Text, Title } from 'native-base';

import styles from './styles';

export function GeneralHeader(title) {
  const setHeaderContainerStyle = [
    styles.headerCommon,
    styles.setHeaderContainer,
    // {marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}
  ];

  return (
    <Header style={setHeaderContainerStyle}>
      <Body style={styles.commonBodySection}>
        <Title style={styles.setHeaderCaption}>{title}</Title>
      </Body>
    </Header>
  );
}

export function SetInfoHeader(title) {
  const setHeaderContainerStyle = [
    styles.headerCommon,
    styles.setHeaderContainer,
    // {marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}
  ];

  return (
    <Header style={setHeaderContainerStyle}>
      <Left style={styles.commonLeftSection}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.setHeaderCaption}/>
        </Button>
      </Left>
      <Body style={styles.commonBodySection}>
        <Title style={styles.setHeaderCaption}>{title}</Title>
      </Body>
      <Right style={styles.commonRightSection} />
    </Header>
  );
}

export function GuideHeader(title) {
  const guideHeaderContainerStyle = [
    styles.headerCommon,
    styles.guideHeaderContainer,
    // { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight },
  ];

  return (
    <Header style={guideHeaderContainerStyle}>
      <Left style={styles.commonLeftSection}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-back" style={[styles.guideHeaderCommon, styles.guideHeaderLeft]}/>
        </Button>
      </Left>
      <Body style={styles.commonBodySection}>
        <Title style={[styles.guideHeaderCommon, styles.guideHeaderCaption]}>{title}</Title>
      </Body>
      <Right style={styles.commonRightSection}>
        <Button transparent onPress={() => Actions['authorized']()}>
          <Icon name="close" style={[styles.guideHeaderCommon, styles.guideHeaderRight]}/>
        </Button>
      </Right>
    </Header>
  );
}

