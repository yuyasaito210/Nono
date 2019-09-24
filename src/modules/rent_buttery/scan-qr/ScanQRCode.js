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
    return (
      <View style={styles.page.container}>
        <Scanner qrCode={qrCode} onRead={this.onReadQRCode} />        
        <ActionButtons 
          onClickClose={this.onClickClose}
          onGoDirectInputCode={this.onGoDirectInputCode}
        />
      </View>
    )
  }

  onReadQRCode = (e) => {
    this.setState({
      ...this.state,
      qrCode: e.data
    })
  }

  onClickClose = () => {
    // temp
    this.setState({
      ...this.state,
      qrCode: 'ROT1219-10'
    })
  }

  onGoDirectInputCode = () => {
    
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

const ActionButtons = ({ onClickClose }) => (
  <>
    <View style={styles.actionLayer.container}>
      <Text style={[styles.actionLayer.text, {top: 60*em}]}>
        Dernière étape
      </Text>
      <Text style={[styles.actionLayer.text, {top: 200*em}]}>
        Rentre le numéro sous le QR Code
      </Text>
      <TouchableOpacity>
        <Text style={[styles.actionLayer.smallText, {top: 520*em}]}>
          QR code non détecté ?
        </Text>
        <Text style={[styles.actionLayer.smallText, {top: 540*em}]}>
          Rentre le numéro de la station
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionLayer.button, {bottom: 40*em, left: 15*em}]}
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
