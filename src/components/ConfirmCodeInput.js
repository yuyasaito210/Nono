import React from 'react';
import { View, Platform, StyleSheet, TextInput } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';

import { fonts, colors } from '../styles';

class ConfirmCodeInput extends React.Component {
  state = {
    confirmCode: ''
  };

  _onFulfill = (code) => {
    console.log('==== onFulfill: code: ', code);
  };

  _onFinishCheckingCode1 = (isValid) => {
    console.log('==== _onFinishCheckingCode1: isValid: ', isValid);
  };

  _onFinishCheckingCode2 = (isValid, code) => {
    console.log('==== _onFinishCheckingCode1: isValid, code: ', isValid, code);
  };

  render() {
    const { style, compareWithCode, codeLength, ...restProps } = this.props;
    const finalStyle = [
      styles.default,
      style && style,
    ];
  
    return (
      <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
        <CodeInput
          ref="codeInput"
          // compareWithCode={compareWithCode}
          activeColor={colors.primaryGradientStart}
          inactiveColor={colors.primaryGradientStart}
          autoFocus={false}
          ignoreCase={true}
          inputPosition='full-width'
          size={HEIGHT}
          codeLength={codeLength}
          keyboardType="numeric"
          codeInputStyle={{ fontWeight: '800' }}
          onFulfill={(code) => this._onFinishCheckingCode2(code)}
          containerStyle={styles.containerStyle}
          codeInputStyle={finalStyle}
        />
      </View>
    );
  }
}

const HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  default: {
    height: HEIGHT,
    color: colors.white,
    //fontFamily: fonts.primaryRegular,
    color: colors.white,
    backgroundColor: colors.textInputBackgroundColor,
    ...Platform.select({
      android: {
        paddingLeft: 5,
        opacity: 0.9,
      },
    }),
  },
  bordered: {
    borderWidth: 0.5,
    borderColor: colors.textInputBackgroundColor,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingLeft: 15
  },
  dark: {
    color: colors.gray,
  },
  primary: {
    borderRadius: HEIGHT / 2,
    backgroundColor: colors.textInputBackgroundColor,
  },
  containerStyle: {
    marginTop: 30
  }
});

export default ConfirmCodeInput;
