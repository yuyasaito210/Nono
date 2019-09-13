import React from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { colors } from '../../styles';
import { Button, Spacer } from '../../components';
import styles from './styles';


export default class GuideFindStationView extends React.Component {
  state = {
    anim: new Animated.Value(0)
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

  onFulFill = (confirmCode) => {
    this.setState({confirmCode});
  };

  onClickNext = () => {
    Actions['guideScan']();
  }

  render() {
    const { appActions } = this.props;
    const { _t } = appActions;

    return (
      <View style={styles.guideContainer}>
        <View style={styles.guideTopSection}>
          <Animated.Image
            resizeMode="contain"
            style={[
              styles.guideImageSection
            ]}
            source={require('../../../assets/images/png/guide-find-station.png')}
          />
        </View>
        <Animated.View
          style={[styles.guideBottomSection, this.fadeIn(700, -20)]}
        >
          <Spacer size={20} />
          <Text style={styles.guideTitle}>
            {_t("Find a station")}
          </Text>
          <Spacer size={10} />
          <Text style={styles.guideDescription}>
            {_t("The app guides you to the nearest partner site")}
          </Text>
          <Spacer size={25} />
          <Button
            bgColor={colors.primary}
            textColor={colors.white}
            secondary
            rounded
            style={styles.nextButton}
            caption={_t('Next')}
            onPress={() => this.onClickNext()}
          />
        </Animated.View>
      </View>
    );
  }
}
