import React from 'react';
import {
  View,
  Text,
  Animated,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { colors } from '../../styles';
import { Button, Spacer, TextInput, KeyboardAvoidingViewFix } from '../../components';
import styles from './styles';
import { signupSetEmail } from './SignupAction';

export default class SetEmailView extends React.Component {
  state = {
    anim: new Animated.Value(0),
    email: ''
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

  onClickNext = () => {
    this.props.signupActions.signupSetEmail(this.state.email);
    Actions['setBirthday']();
  }

  render() {
    const { signup, app, signupActions, appActions } = this.props;
    const { _t } = appActions;
    const { email } = this.state;
    // if (!app.isFirstOpen && isLoggedIn) {
    //   navigation.navigate('Home');
    // }
    return (

        <ImageBackground
          source={require('../../assets/images/png/mask-group-28-2x.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <KeyboardAvoidingViewFix>
            <View style={styles.container}>
              <Animated.View
                style={[styles.buttonContainer, this.fadeIn(700, -20)]}
              >
                <Text style={styles.title}>
                  {_t('Delighted Theo, what is your email?')}
                </Text>
                <Spacer size={110} />
                <TextInput
                  placeholder={_t('Email')}
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={email => this.setState({email})}
                />
                <Spacer size={80} />
                <Button
                  bgColor="white"
                  textColor={colors.primary}
                  secondary
                  rounded
                  style={styles.nextButton}
                  caption={_t('Next')}
                  onPress={() => this.onClickNext()}
                />
              </Animated.View>
            </View>
          </KeyboardAvoidingViewFix>
        </ImageBackground>
    );
  }
}
