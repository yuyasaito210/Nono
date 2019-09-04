import React from 'react';
import {
  View,
  Text,
  Animated,
  Keyboard,
  Platform,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Actions } from 'react-native-router-flux'

import { fonts, colors } from '../../styles';
import { TextInput, Button } from '../../components';
import styles from './styles';

const FORM_STATES = {
  LOGIN: 0,
  REGISTER: 1,
};

export default class SignupScreen extends React.Component {
  state = {
    anim: new Animated.Value(0),

    // Current visible form
    formState: FORM_STATES.REGISTER,
    isKeyboardVisible: false,
    userName: '',
    email: '',
    password: ''
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }),
      this._keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }),
      this._keyboardDidHide.bind(this),
    );
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: true });
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
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

  onClickGotoAuth = () => {
    LayoutAnimation.spring();
    Actions['login']();
  };

  onClickSignup = () => {
    console.log('==== this.state: ', this.state);
    const { userName, email, password } = this.state;
    this.props.actionSignUp({userName, email, password})
  };

  render() {
    const isRegister = this.state.formState === FORM_STATES.REGISTER;
    const { signup, app, navigation } = this.props
    const { isSignedUp } = signup;

    console.log('====== SignupView: props: ', this.props);

    return (
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={[styles.section, { paddingTop: 30 }]}>
            <Animated.Image
              resizeMode="contain"
              style={[
                styles.logo,
                this.state.isKeyboardVisible && { height: 90 },
                this.fadeIn(0),
              ]}
              source={require('../../../assets/images/white-logo.png')}
            />
          </View>

          <Animated.View
            style={[styles.section, styles.middle, this.fadeIn(700, -20)]}
          >
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.userName}
              onChangeText={userName => this.setState({ userName })}
            />

            {this.state.formState === FORM_STATES.REGISTER && (
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            )}

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <Animated.View
              style={[styles.section, styles.bottom, this.fadeIn(700, -20)]}
            >
              <Button
                bgColor="white"
                textColor={colors.primary}
                secondary
                rounded
                style={{ alignSelf: 'stretch', marginBottom: 10 }}
                caption={'Register'}
                onPress={this.onClickSignup}
              />

              {!this.state.isKeyboardVisible && (
                <View style={styles.socialLoginContainer}>
                  <Button
                    style={styles.socialButton}
                    bordered
                    rounded
                    icon={require('../../../assets/images/google-plus.png')}
                    onPress={() => this.props.navigation.goBack()}
                  />
                  <Button
                    style={[styles.socialButton, styles.socialButtonCenter]}
                    bordered
                    rounded
                    icon={require('../../../assets/images/twitter.png')}
                    onPress={() => this.props.navigation.goBack()}
                  />
                  <Button
                    style={styles.socialButton}
                    bordered
                    rounded
                    icon={require('../../../assets/images/facebook.png')}
                    onPress={() => this.props.navigation.goBack()}
                  />
                </View>
              )}

              {!this.state.isKeyboardVisible && (
                <TouchableOpacity
                  onPress={this.onClickGotoAuth}
                  style={{ paddingTop: 30, flexDirection: 'row' }}
                >
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.primaryRegular,
                    }}
                  >
                    {isRegister
                      ? 'Already have an account?'
                      : "Don't have an account?"}
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.primaryBold,
                      marginLeft: 5,
                    }}
                  >
                    {isRegister ? 'Login' : 'Register'}
                  </Text>
                </TouchableOpacity>
              )}
            </Animated.View>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}
