import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';

import { fonts, colors } from '../styles';

const VALID_COUNTRIES = ['FR', 'US']

class PhoneNumberInput extends Component {
  constructor() {
    super();

    this.state = {
      cca2: 'FR',
      callingCode: '33'
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('=====  PhoneNumberInput: nextProps: ', nextProps);
    const { initialCountry } = nextProps;
    if (initialCountry) {
      this.setState({cca2: initialCountry}, () => {
        this.phone.selectCountry(this.state.cca2.toLowerCase());
      })
    }
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }

  onPressFlag = () => {
    this.countryPicker.openModal();
  };

  onChangePhoneNumber = (number) => {
    if (this.props.onChangePhoneNumber) this.props.onChangePhoneNumber(number);
  };

  selectCountry = (country) => {
    console.log('===== PhoneNumberInput: selectCountry: country: ', country)
    this.phone.selectCountry(country.cca2.toLowerCase());
    const { onSelectCountry } = this.props;
    onSelectCountry && onSelectCountry(country.cca2);
  }

  render() {
    const { dark, style, initialCountry } = this.props;
    const finalStyle = [
      styles.default,
      styles.bordered,
      dark && styles.dark,
      style && style,
    ];

    const { cca2 } = this.state;

    return (
      <View style={styles.container}>
        <PhoneInput
          ref={(ref) => {
            this.phone = ref;
          }}
          initialCountry={initialCountry ? initialCountry : cca2.toLowerCase()}
          onPressFlag={this.onPressFlag}
          onChangePhoneNumber={(number) => this.onChangePhoneNumber(number)}
          style={finalStyle}
        />

        <CountryPicker
          ref={(ref) => {
            this.countryPicker = ref;
          }}
          countryList={VALID_COUNTRIES}
          onChange={value => this.selectCountry(value)}
          translation="eng"
          cca2={this.state.cca2}
        >
          <View />
        </CountryPicker>
      </View>
    );
  }
}

const HEIGHT = 40;

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  default: {
    height: HEIGHT,
    color: 'white',
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
  light: {
    color: colors.white
  },
  primary: {
    borderRadius: HEIGHT / 2,
    backgroundColor: colors.textInputBackgroundColor,
  },
});

module.exports = PhoneNumberInput;