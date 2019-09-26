import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from '../styles';
import QRCode from 'react-native-qrcode-svg';

export default class ScanQRCode extends React.Component {
  state = {
    qrCode: ''
  }
  render = () => {
    const { qrCode } = this.state;
    const { onSwitchQRCodeInput, appActions } = this.props;
    return (
      <View style={styles.page.container}>
        <Scanner qrCode={qrCode} onRead={this.onReadQRCode} />        
        <ActionButtons 
          onClickClose={this.onClickClose}
          onGoDirectInputCode={onSwitchQRCodeInput}
          appActions={appActions}
        />
      </View>
    )
  }

  onReadQRCode = (e) => {
    this.setState({qrCode: e.data}, () => {
      this.props.onReadQRCode && this.props.onReadQRCode(qrCode);
    });
    
  }

  onClickClose = () => {
    this.setState({qrCode: 'ROT1219-10'});
  }

  onGoDirectInputCode = () => {
    this.props.onSwitchQRCodeInput && this.props.onSwitchQRCodeInput();
  }
}

const Scanner = ({ qrCode, onReadQRCode }) => (
  <>
    <View style={styles.scanner.container}>
      <QRCodeScanner 
        onRead={onReadQRCode} 
        showMarker={true}
        cameraStyle={styles.scanner.camera}
      />
      {qrCode!='' && 
        <View style={styles.scanner.svgContainer}>
          <View style={styles.scanner.svgInnerContainer}>
            <QRCode 
              value={qrCode}
              size={200}/>
            <Text style={styles.scanner.svgText}>
              {qrCode}
            </Text>
          </View>
        </View>        
      }
    </View>
  </>
)

const ActionButtons = ({ onClickClose, onGoDirectInputCode, appActions }) => (
  <>
    <View style={styles.actionLayer.container}>
      <Text style={[styles.actionLayer.text, {top: 60*em}]}>
        {appActions._t('Last step')}
      </Text>

      <Text style={[styles.actionLayer.text, {top: 200*em}]}>
        {appActions._t('Enter the number under the QR Code')}
      </Text>
      <TouchableOpacity onPress={onGoDirectInputCode} style={{zIndex: 99}}>
        <Text style={[styles.actionLayer.smallText, {top: 520*em}]}>
          {appActions._t('QR code not detected?')}
        </Text>
        <Text style={[styles.actionLayer.smallText, {top: 540*em}]}>
          {appActions._t('Enter the number of the station')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionLayer.button, {bottom: 40*em, left: 15*em, zIndex: 99}]}
        onPress={onClickClose}
      >
        <Image source={require('images/cross.png')} style={styles.actionLayer.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.actionLayer.button, {bottom: 40*em, right: 15*em}]}
      >
        <Text style={styles.actionLayer.buttonText}>123</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.actionLayer.button, {bottom: 110*em, right: 15*em}]}
      >
        <Image source={require('images/flash-QR-code.png')} style={styles.actionLayer.buttonImage} />
      </TouchableOpacity>
    </View>
  </>
)
