import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Image } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from '../styles';

const RentBoxWrapper = ({ children }) => (
  <View style={{
    position: 'absolute', zIndex: 15,
    bottom: 0, left: 0, 
    width: W,
    borderTopLeftRadius: 30*em, borderTopRightRadius: 30*em,
    overflow: 'hidden'
  }}>
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#ffdf00', '#ff52a8']}
    >
      <View style={{
        width: W, height: 20*em, 
        alignItems: 'center', justifyContent: 'center'
      }}>
        <Image source={require('images/slide.png')} 
          style={{
            tintColor: '#fff'
          }} 
        />
      </View>
      {children}
    </LinearGradient>    
  </View>
)

export default RentBoxWrapper;