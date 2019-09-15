import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { fonts, colors } from '../../styles';
import { Button, Spacer, CreditCardScanner } from '../../components';
import styles from './styles';


export default class GuideAddPaymentView extends React.Component {
  state = {
    anim: new Animated.Value(0),
  };

  componentWillMount() {
  }

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

  onClickAddLydia = () => {
    
  }

  onClickAddApplePlay = () => {
    
  }

  render() {
    const { appActions } = this.props;
    const { _t } = appActions;

    return (
      <View style={styles.guideContainer}>
        <View style={styles.guideTopSection}>
          <CreditCardScanner />
        </View>
        <Animated.View
          style={[styles.guideBottomSection, this.fadeIn(700, -20)]}
        >
          <Spacer size={20} />
          <Button
            bgColor={colors.primary}
            textColor={colors.white}
            secondary
            rounded
            style={styles.guideNextButton}
            caption={_t('Add an account Lydia')}
            onPress={() => this.onClickAddLydia()}
          />
          <Button
            bgColor={colors.primary}
            textColor={colors.white}
            secondary
            rounded
            style={styles.guideNextButton}
            caption={_t('Add Apple Pay')}
            onPress={() => this.onClickAddApplePlay()}
          />
        </Animated.View>
      </View>
    );
  }
}
