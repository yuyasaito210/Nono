import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import { QRScannerView, Spacer } from '~/components';

export default class ScanQRCode extends React.Component {
  state = {
    qrCode: '',
    scanBarAnimateReverse: true
  }

  onReadQRCode = (e) => {
    _this = this;
    this.setState({qrCode: e.data, scanBarAnimateReverse: false}, () => {
      _this.props.onReadQRCode && _this.props.onReadQRCode(qrCode);
    });
  }

  onClickClose = () => {
    this.setState({qrCode: 'ROT1219-10'});
  };

  renderTitleBar = () => {
    const { _t } = this.props.appActions;
    return (
      <View>
        <Text style={{color:'white',textAlign:'center',padding:16}}>
          {_t('Last step')}
        </Text>
        <Spacer size={30}/>
        <Text style={{color:'white',textAlign:'center',padding:16}}>
          {_t('Enter the number under the QR Code')}
        </Text>
      </View>
    );
  }

  renderBottom = () => 
  {
    const { _t } = this.props.appActions;
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.flashLayer}>
          <TouchableOpacity style={styles.flashImageContainer}>
            <Image 
              style={styles.flashImage} 
              source={require('images/flash-QR-code.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <Spacer size={15}/>
        <View style={styles.bottomNavigationLayer}>
          <TouchableOpacity style={styles.bottomCloseImageContainer}>
            <MaterialIcon name="close" style={styles.bottomCloseImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomInputQRCodeImageContainer}>
            <Text style={styles.bottomInputQRCodeImage}>123</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomEmptyContainer}>
          <Spacer size={30}/>
        </View>
      </View>
    )
  }

  barcodeReceived = (event) => {
    console.log('==== Type: ' + event.type + '\nData: ' + event.data)
    _this = this;
    this.setState({qrCode: e.data, scanBarAnimateReverse: false}, () => {
      // _this.props.onReadQRCode && _this.props.onReadQRCode(qrCode);
    });
  };

  render = () => {
    const { qrCode } = this.state;
    const { onSwitchToQRCodeInput, appActions } = this.props;
    const { _t } = appActions;
    return (
      <View style={{flex:1}}>
        < QRScannerView
          onScanResult={ this.barcodeReceived }
          renderHeaderView={ this.renderTitleBar }
          renderFooterView={ this.renderBottom }
          scanBarAnimateReverse={ true }
          hintText={`${_t('QR code not detected?')} ${_t('Enter the number of the station')}`}
          hintTextStyle={styles.hintTextStyle}
        />
      </View>
    )
  } 
}
