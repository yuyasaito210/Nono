import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
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

  onClickClose = () => {
    Actions.pop();
    // this.setState({qrCode: 'ROT1219-10'});
  };

  renderTitleBar = () => {
    const { _t } = this.props.appActions;
    const { qrCode } = this.state;
    return qrCode ? (
      <Text style={{color:'white',textAlign:'center',padding:16}}>
        {qrCode}
      </Text>
    ) :(
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

  renderBottom = () => {
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
          <TouchableOpacity style={styles.bottomCloseImageContainer} onPress={() => this.onClickClose()}>
            <MaterialIcon name="close" style={styles.bottomCloseImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomInputQRCodeImageContainer} onPress={() => Actions['enter_code']()}>
            <Text style={styles.bottomInputQRCodeImage}>123</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomEmptyContainer}>
          <Spacer size={30}/>
        </View>
      </View>
    )
  }

  onReceivedQRCode = (event) => {
    
    this.setState({qrCode: event.data, scanBarAnimateReverse: false}, () => {
      Actions['rent_buttery_feedback']();
    });
  };

  render = () => {
    const { qrCode } = this.state;
    const { onSwitchToQRCodeInput, appActions } = this.props;
    const { _t } = appActions;
    return (
      <View style={{flex:1}}>
        < QRScannerView
          onScanResult={ this.onReceivedQRCode }
          renderHeaderView={ this.renderTitleBar }
          renderFooterView={ <this.renderBottom onSwitchToQRCodeInput={onSwitchToQRCodeInput}/>}
          scanBarAnimateReverse={ true }
          hintText={`${_t('QR code not detected?')} ${_t('Enter the number of the station')}`}
        />
      </View>
    )
  } 
}
