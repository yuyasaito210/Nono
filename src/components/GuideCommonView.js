import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import { fonts, colors } from '../styles';
import Button from './Button';
import Spacer from './Spacer';


export default class GuideCommonView extends React.Component {
  state = {
    anim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
  }

  fadeIn(delay, from = 0) {
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
  }

  onClickNext = () => {
    if (this.props.onClickNext) this.props.onClickNext();
  }

  render() {
    const { imageSource, guideTitle, guideDescription, nextButtonTitle } = this.props;

    return (
      <View style={styles.guideContainer}>
        <View style={styles.guideTopSection}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.guideImageSection]}
            source={imageSource}
          />
        </View>
        <Animated.View
          style={[styles.guideBottomSection, this.fadeIn(700, -20)]}
        >
          <Spacer size={20} />
          <Text style={styles.guideTitle}>
            {guideTitle}
          </Text>
          <Spacer size={10} />
          <Text style={styles.guideDescription}>
            {guideDescription}
          </Text>
          <Spacer size={25} />
          <Button
            bgColor={colors.primary}
            textColor={colors.white}
            secondary
            rounded
            style={styles.guideNextButton}
            caption={nextButtonTitle}
            onPress={() => this.onClickNext()}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  guideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  guideTopSection: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  guideImageSection: {
    // flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
    width: '100%'
  },
  guideBottomSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  guideTitle: {
    color: colors.black,
    //fontFamily: fonts.primaryRegular,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  guideDescription: {
    color: colors.black,
    textAlign: 'center',
    //fontFamily: fonts.primaryRegular,
  },
  guideNextButton: {
    alignSelf: 'stretch', 
    marginBottom: 10
  },
});