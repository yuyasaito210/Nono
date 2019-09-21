import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanQRCode extends React.Component {
  render = () => {
    return (
      <>
        <QRCodeScanner />
      </>
    )
  }
}