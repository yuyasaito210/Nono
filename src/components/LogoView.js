import React, { Component } from 'react';
import { StyleSheet, View, Platform, Animated } from 'react-native';

import Spacer from './Spacer';
import { fonts, colors } from '../styles';

class LogoView extends Component {
  state = {
    anim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  fadeIn = (delay, from = 0) => {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [delay, Math.min(delay + 500, 3000)],
            outputRange: [from, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  render() {
    const { style } = this.props;
    const finalStyle = [
      style && style,
    ];
    return (
      <Animated.View
        style={[finalStyle, styles.section, styles.middle, this.fadeIn(700, -20)]}
      >
        <Spacer size={150} />
        <View style={styles.logoImageSectionContainer}>
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.logoImageLeftSection,
              this.fadeIn(0),
            ]}
            source={require('../../assets/images/png/flash-left-2x.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.logoImageSection,
              this.fadeIn(0),
            ]}
            source={require('../../assets/images/png/logo-nono-2x.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.logoImageRightSection,
              this.fadeIn(0),
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