import React from 'react';
import styles from '../styles';
import { W, H, em } from '~/constants/Layout';
import { View, Text, Image } from 'react-native';
import RentBoxWrapper from './RentBoxWrapper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '~/components';

export default class UnlockBox extends React.Component {
  render = () => {
    return (
      <RentBoxWrapper>
        <Text 
          style={[
            styles.rentBox.text,
            {marginVertical: 10*em, fontSize: 24*em, fontWeight: 'bold'}
          ]}
        >
          00:02
        </Text>
        <ForwardButton />
        <InnerBoxWrapper>
          <Button 
            rounded
            bgColor='#35cdfa' textColor='#fff'
            icon={require('images/qr-code.png')} iconColor='#fff'
            caption='Déverrouille une nono'
          />
        </InnerBoxWrapper>
      </RentBoxWrapper>
    )
  }
}

const ForwardButton = () => (
  <View style={{
    position: 'absolute', top: 20*em, right: 20*em
  }}>
    <TouchableOpacity 
      style={{
        width: 30*em, height: 30*em,
        borderRadius: 10*em,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#fff'
      }}
    >
      <Image source={require('images/arrow-direction.png')} 
        style={{
          tintColor: '#ff52a8', width: 10*em, height: 10*em
        }}
      />
    </TouchableOpacity>
  </View>
)

const InnerBoxWrapper = ({ children }) => (
  <View style={{
    backgroundColor: '#fff',
    borderTopLeftRadius: 20*em, borderTopRightRadius: 20*em,
    paddingTop: 20*em, paddingBottom: 40*em, paddingHorizontal: 20*em
  }}>
    {children}
  </View>
)