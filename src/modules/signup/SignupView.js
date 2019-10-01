import React from 'react';
import {
  View,
  Text,
  Animated,
  LayoutAnimation,
  TouchableOpacity,
  ImageBackground,
  Alert,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux'

import { fonts, colors } from '../../styles';
import { Button, Spacer, PhoneNumberInput, LogoView, KeyboardAvoidingViewFix } from '../../components';
import styles from './styles';


export default class SignupView extends React.Component {
  state = {
    anim: new Animated.Value(0),
    phoneNumber: '',
    signingUp: false,
  };

  componentWillMount() {
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
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
  }

  onClickNext = () => {
    Actions['setConfirmCode']();
  };

  onClickFacebook = () => {
    const { _t } = this.props.appActions;
    Alert.alert(
      _t('"Nono" wants to use "facebook.com" to connect'),
      _t('This allows the app and the website to exchange information about you.'),
      [
        {
          text: _t('Cancel'),
          style: 'cancel'
        },
        {
          text: _t('Continue'),
          onPress: () => this.onClickNext()
        }
      ],
      { cancelable: false }
    );
  };

  onSelectCountry = (country) => {
    console.log('====== SignUp: onSelectCountry: country: ', country);
    this.props.appActions.setLanguage(country.toLowerCase());
  }

  render() {
    const { app, signupActions, appActions } = this.props;
    const { _t } = appActions;
    const country = app.language;

    return (
      <ImageBackground
        source={require('../../assets/images/png/mask-group-28-2x.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingViewFix>
          <View style={styles.container}>
            <LogoView style={styles.logoViewContainer}/>
            <Animated.View
              style={[styles.buttonContainer, this.fadeIn(700, -20)]}
            >
              <Text style={styles.title}>
                {_t("Register yourself")}
              </Text>
              <Spacer size={30} />
              <PhoneNumberInput initialCountry={country} onSelectCountry={this.onSelectCountry}/>
              <Spacer size={25} />
              <Button
                bgColor="white"
                textColor={colors.primary}
                secondary
                rounded
                style={styles.nextButton}
                caption={_t('Next')}
                onPress={() => this.onClickNext()}
              />
              <Text style={styles.descriptionText}>
                {_t("We will send you an SMS to check your number")}
              </Text>
              <Spacer size={10} />
              <Text style={styles.descriptionText}>
                {_t("or")}
              </Text>
              <Spacer size={10} />
              <View style={styles.socialLoginContainer}>
                <Button
                  style={styles.socialButton}
                  bgColor={colors.primaryDark}
                  textColor={colors.white}
                  rounded
                  caption={_t('Continue with facebook')}
                  icon={require('../../assets/images/facebook.png')}
                  onPress={() => this.onClickFacebook()}
                />
              </View>
              <Spacer size={10} />
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.spring();
                  Actions['login']();
                }}
                style={{ flexDirection: 'row' }}
              >
                <Text style={styles.descriptionText}>
                  {_t("Already have an account?")}
                </Text>
                <Text
                  style={{
                    color: colors.white,
                    //fontFamily: fonts.primaryBold,
                    marginLeft: 5,
                  }}
                >
                  {_t('Connect yourself')}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </KeyboardAvoidingViewFix>
      </ImageBackground>
    );
  }
}
