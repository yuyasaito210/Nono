import React, { Component } from 'react';
import { StyleSheet, View, Platform, Animated } from 'react-native';

import Spacer from './Spacer';
import { fonts, colors } from '../styles';

class LogoView extends Component {
  state = {
    anim: new Animated.Value(0),
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
  }

  render() {
    const { style } = this.props;
    const finalStyle = [
      style && style,
    ];
    return (
      <Animated.View
        style={[finalStyle, styles.section, styles.middle]}
      >
        <Spacer size={150} />
        <View style={styles.logoImageSectionContainer}>
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.logoImageLeftSection
            ]}
            source={require('../../assets/images/png/flash-left-2x.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.logoImageSection
            ]}
            source={require('../../assets/images/png/logo-nono-2x.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.logoImageRightSection,
            ]}
            source={require('../../assets/images/png/flash-right-2x.png')}
          />
        </View>
        
        <Spacer size={50} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  logo: {
    height: 150,
  },
  logoImageSectionContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 150,
    justifyContent: 'space-between',
  },
  logoImageSection: {
    flex: 1,
    height: 170,
  },
  logoImageLeftSection: {
    flex: 1,
    left: -70,
    top: -70,
    height: 170,
  },
  logoImageRightSection: {
    flex: 1,
    right: -70,
    top: -70,
    height: 170,
  }
});

module.exports = LogoView;