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
import { Button, Spacer, ConfirmCodeInput } from '../../components';
import styles from './styles';


export default class SetConfirmCodeView extends React.Component {
  state = {
    anim: new Animated.Value(0),
    phoneNumber: '',
    confirmCode: ''
  };

  componentWillMount() {
    // const { phoneNubmer, confirmCode } = this.props.signup;
    // this.setState({phoneNubmer, confirmCode});
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
    Actions['setUserName']();
  }

  render() {
    const { signup, app, signupActions, appActions } = this.props;
    const { _t } = appActions;
    const { phoneNumber, confirmCode } = this.state;
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
                {_t('Phone number validation')}
              </Text>
              <Spacer size={10} />
              <Text style={styles.descriptionText}>
                {_t('Enter the 4-digit code sent to')}
              </Text>
              <Spacer size={30} />
              <ConfirmCodeInput 
                compareWithCode='1234'
                codeLength={4}
                onFulFill={this.onFulFill} />
              <Spacer size={50} />
              <Text style={styles.descriptionText}>
                {_t('Return the code')}
              </Text>
              <Spacer size={15} />
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
