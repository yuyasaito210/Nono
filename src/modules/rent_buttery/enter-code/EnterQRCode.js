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
    return (
      <View style={[styles.page.container, styles.enterCode.pageWrapper]}>
        <CodeForm codeCharacters={codeCharacters}/>
        <ActionButtons />
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

const ActionButtons = ({ onClickClose }) => (
  <>
    <View style={styles.actionLayer.container}>
      <Text style={[
        styles.actionLayer.text, 
        {top: 80*em, fontSize: 24*em, fontWeight: 'bold'}
      ]}>
        Entre le code
      </Text>
      <Text style={[
        styles.actionLayer.text, 
        {top: 120*em}
      ]}>
        Le code est situé sous le QR Code
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
      >
        <Image source={require('images/qr-code.png')} style={styles.actionLayer.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.actionLayer.button, 
          styles.enterCode.button,
          {bottom: 350*em, right: 15*em}
        ]}
      >
        <Image source={require('images/flash-QR-code.png')} style={styles.actionLayer.buttonImage} />
      </TouchableOpacity>      
    </View>
  </>
)
