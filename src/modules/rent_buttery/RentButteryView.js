import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../../components/StyledText';
import styles from './styles';
import QRScanner from './QRScanner';

export default class RentButterryView extends Component {
  state = {}
  
  render() {
    return (
      <View style={styles.container}>
        <QRScanner />
      </View>
    );
  }
}
