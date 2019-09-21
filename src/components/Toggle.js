import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { em } from '~/constants/Layout';

export default class Toggle extends React.Component {
  render = () => {
    const { on, onToggle } = this.props;

    return (
      <>
        <TouchableOpacity onPress={onToggle}>
          <Image source={require('images/on-off.png')} 
            style={[styles.image, on && styles.imageOn]} 
          />
        </TouchableOpacity>        
      </>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 54*em, height: 30*em
  },
  imageOn: {
    transform: [{ rotate: '180deg' }]
  }
})