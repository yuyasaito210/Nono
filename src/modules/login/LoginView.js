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
import { TextInput, Button, Spacer } from '../../components';
import styles from './styles';


export default class LoginView extends React.Component {
  state = {
    anim: new Animated.Value(0),
    isKeyboardVisible: false,
    email: '',
    password: '',
    logining: false,
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
    // this.props.setAppOpened();
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

  onClickLogin = () => {
    const { email, password } = this.state;
    this.setState({ logining: true }, () => {
      // this.props.loginActions.loginInit();
      // this.props.loginActions.loginRequest(email, password);
      this.props.loginActions.actionLogin({email, password});
    });
  };

  render() {
    const { login, app, actionLoggingIn, actionLogOut, appActions } = this.props;
    const { _t } = appActions;
    const { isLoggedIn } = login;
    const { email, password } = this.state;
    console.log('====== LoginView: props: ', this.props);
    // if (!app.isFirstOpen && isLoggedIn) {
    //   navigation.navigate('Home');
    // }
    return (
      <ImageBackground
        source={require('../../../assets/images/png/mask-group-28-2x.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Spacer size={100} />
          <View style={styles.logoImageSectionContainer}>
            <Animated.Image
              resizeMode="contain"
              style={[
                styles.logoImageLeftSection,
                this.state.isKeyboardVisible && { height: 90 },
                this.fadeIn(0),
              ]}
              source={require('../../../assets/images/png/flash-left-2x.png')}
            />
            <Animated.Image
              resizeMode="contain"
              style={[
                styles.logoImageSection,
                this.state.isKeyboardVisible && { height: 90 },
                this.fadeIn(0),
              ]}
              source={require('../../../assets/images/png/logo-nono-2x.png')}
            />
            <Animated.Image
              resizeMode="contain"
              style={[
                styles.logoImageRightSection,,
                this.state.isKeyboardVisible && { height: 90 },
                this.fadeIn(0),
              ]}
              source={require('../../../assets/images/png/flash-right-2x.png')}
            />
          </View>

          <Animated.View
            style={[styles.section, styles.middle, this.fadeIn(700, -20)]}
          >
            <Text style={styles.title}>
              {_t("Register yourself")}
            </Text>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={email => this.setState({email})}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInput}
              value={password}
              onChangeText={password => this.setState({password})}
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
                caption={_t('Login')}
                onPress={() => this.onClickLogin()} 
              />
              <View style={styles.socialLoginContainer}>
                <Button
                  style={styles.socialButton}
                  bordered
                  rounded
                  caption={_t('Continue with facebook')}
                  icon={require('../../../assets/images/facebook.png')}
                  onPress={() => this.props.navigation.goBack()}
                />
              </View>

              {!this.state.isKeyboardVisible && (
                <TouchableOpacity
                  onPress={() => {
                    LayoutAnimation.spring();
                    Actions['signup']();
                  }}
                  style={{ paddingTop: 30, flexDirection: 'row' }}
                >
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.primaryRegular,
                    }}
                  >
                    {_t("Don't have an account?")}
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.primaryBold,
                      marginLeft: 5,
                    }}
                  >
                    {_t('Register')}
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
