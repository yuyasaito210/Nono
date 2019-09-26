import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';

export default class PriceBox extends React.Component {
  state = {
    selectedIndex: 0
  }
  render = () => {
    const { selected } = this.props;
    const { title, subtitle, hasBonus, options } = this.props;
    const { selectedIndex } = this.state;

    return (
      <>
        {selected?
          <View style={{
            borderRadius: 20*em, padding: 20*em,
            alignItems: 'center',
            marginVertical: 5*em,
            backgroundColor: '#5ed8fc',
            overflow: 'hidden'
          }}>
            <Image source={require('images/flash.png')} style={{
              position: 'absolute', left: 0, top: 0,
              tintColor: 'rgba(255, 255, 255, 0.5)'
            }} />
            <Text style={{
              fontSize: 36*em, color: '#fff', fontWeight: 'bold'
            }}>
              {title}
            </Text>
            {options.map((option, index) => (
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 10*em}}>
                <Text style={{color: 'white', fontSize: 14*em}}>{option.title}</Text>
                {index==selectedIndex?
                  <Image source={require('images/selected.png')} style={{tintColor: 'white'}} />
                :
                  <Image source={require('images/select.png')} style={{tintColor: 'white'}} />
                }
              </View>
            ))}            
          </View>
        :
          <View style={{
            borderRadius: 20*em, padding: 20*em,
            backgroundColor: '#f2f2f2',
            alignItems: 'center',
            marginVertical: 5*em
          }}>
            <Text style={{
              fontSize: 36*em, color: '#36384a', fontWeight: 'bold'
            }}>
              {title}
            </Text>
            <Text style={{
              fontSize: 14*em, color: hasBonus?'#35cdfa':'#bfbfc4'
            }}>
              {subtitle}
            </Text>
          </View>
        }
      </>
    )
  }
}