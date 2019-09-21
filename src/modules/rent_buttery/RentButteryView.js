import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../../components/StyledText';
import styles from './styles';
// import QRScanner from './QRScanner';
import ScanQRCode from './scan-qr/ScanQRCode';

export default class RentButterryView extends Component {
  state = {
    pageStatus: 'scanQRcode'
  }

  // pageStatus  - scanQRcode, enterCode, openRentDialog, openUnlockDialog, openFeedbackDialog
  
  render() {
    const { pageStatus } = this.state;
    return (
      <>
        {pageStatus=='scanQRCode' && 
          <ScanQRCode />
        }
      </>
    );
  }
}
