import React from 'react';
import styles from '../styles';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { W, H, em } from '~/constants/Layout';

export default class EnterQRCode extends React.Component{
  state = {
    codeCharacters: ['', '', '', '', '', '']
  }

  render = () => {
    const { codeCharacters } = this.state;
    const { onSwitchToQRScanner, onGoToLocation, appActions } = this.props;
    return (
      <View style={[styles.page.container, styles.enterCode.pageWrapper]}>
        <CodeForm codeCharacters={codeCharacters}/>
        <ActionButtons 
          onClickClose={onSwitchToQRScanner}
          onGoToLocation={onGoToLocation}
          appActions={appActions}
        />
      </View>
    )
  }
}

class CodeForm extends React.Component {
  render = () => {
    const { codeCharacters } = this.props;
    return (
      <View style={styles.enterCode.formWrapper}>
        {codeCharacters.map((c, key) => (
          <TextInput key={key}
            style={styles.enterCode.formInput}
            maxLength={1}
            keyboardType='numeric' />
        ))}
      </View>
    )    
  }
}

const ActionButtons = ({ onClickClose, onGoToLocation, appActions }) => ( 
  <>
    <View style={styles.actionLayer.container}>
      <Text style={[
        styles.actionLayer.text, 
        {top: 80*em, fontSize: 24*em, fontWeight: 'bold'}
      ]}>
        {appActions._t('Enter the code')}
      </Text>
      <Text style={[
        styles.actionLayer.text, 
        {top: 120*em}
      ]}>
        {appActions._t('The code is located under the QR Code')}
      </Text>
      <TouchableOpacity
        style={[
          styles.actionLayer.button, 
          styles.enterCode.button,
          {bottom: 280*em, left: 15*em}
        ]}
        onPress={onClickClose}
      >
        <Image source={require('images/cross.png')} 
          style={styles.actionLayer.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.actionLayer.button, 
          styles.enterCode.button,
          {bottom: 280*em, right: 15*em}
        ]}
        onPress={onGoToLocation}
      >
        <Image
          source={require('images/qr-code.png')}
          style={styles.actionLayer.buttonImage} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.actionLayer.button, 
          styles.enterCode.button,
          {bottom: 350*em, right: 15*em}
        ]}
      >
        <Image
          source={require('images/flash-QR-code.png')}
          style={styles.actionLayer.buttonImage}
        />
      </TouchableOpacity>      
    </View>
  </>
)
