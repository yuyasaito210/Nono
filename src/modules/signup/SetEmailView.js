import React from 'react';
import {
  View,
  Text,
  Animated,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { fonts, colors } from '../../styles';
import { Button, Spacer, TextInput } from '../../components';
import styles from './styles';


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
          <KeyboardAvoidingView
            style={styles.keyboardScrollViewContainer}
            behavior="padding"
            enabled>
            <View style={styles.container}>
            {/* <LogoView style={styles.logoViewContainer}/> */}
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
          </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
}
