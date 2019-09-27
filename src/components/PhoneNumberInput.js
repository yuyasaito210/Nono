import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';

import { fonts, colors } from '../styles';

const VALID_COUNTRIES = ['FR', 'US']

class PhoneNumberInput extends Component {
  constructor() {
    super();

    const userCountryData = getAllCountries()
      .filter(country => VALID_COUNTRIES.includes(country.cca2))
      .pop()
    let callingCode = null
    let cca2 = VALID_COUNTRIES[0]
    if (!cca2 || !userCountryData) {
      cca2 = 'FR'
      callingCode = '33'
    } else {
      callingCode = userCountryData.callingCode
    }

    this.state = {
      cca2,
      callingCode
    };
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
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2, callingCode: country.callingCode }, () => {
      const { onSelectCountry } = this.props;
      onSelectCountry && onSelectCountry(this.state.cca2)
    });
    
  }

  render() {
    const { dark, style } = this.props;
    const finalStyle = [
      styles.default,
      styles.bordered,
      dark && styles.dark,
      style && style,
    ];

    return (
      <View style={styles.container}>
        <PhoneInput
          ref={(ref) => {
            this.phone = ref;
          }}
          onPressFlag={this.onPressFlag}
          onChangePhoneNumber={(number) => this.onChangePhoneNumber(number)}
          // style={finalStyle}
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