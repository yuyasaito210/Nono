import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';
import { _t } from '../../AppAction';
import { Button } from '~/components';
import PriceBox from './PriceBox';
import { Actions } from 'react-native-router-flux';

export default class PayView extends React.Component {
  state = {
    rechargable: false,
    pays: [
      {
        title: '5€',
        subtitle: 'No bonus',
        hasBonus: false
      },
      {
        title: '10€',
        subtitle: 'No bonus',
        hasBonus: false
      },
      {
        title: '15€',
        subtitle: 'BONUS OF 1€',
        hasBonus: true
      },
      {
        title: '20€',
        subtitle: 'BONUS OF 2€ OR PLANT A TREE',
        hasBonus: true
      }
    ]
  }
  render = () => {
    const { _t } = this.props.appActions;
    const { rechargable } = this.state;

    return (
      <View style={{
        position: 'relative', backgroundColor: '#5ed8fc', paddingTop: 50*em,
        width: W, height: H
      }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1}} onPress={() => Actions.pop()}>
            <Image source={require('images/arrow.png')} resizeMode='center'
              style={styles.backButton} />
          </TouchableOpacity>
          <View style={{flex: 4, alignItems: 'center'}}>
            <Text style={{fontSize: 34*em, color: 'white', fontWeight: 'bold'}}>
              0,00€
            </Text>
            <Text style={{fontSize: 16*em, color: 'white'}}>
              {_t('Current balance')}
            </Text>
          </View>
          <View style={{flex: 1}}/>
        </View>
        <View style={{
          position: 'relative', overflow: 'hidden', marginTop: 20*em,
          backgroundColor: 'white',
          borderTopLeftRadius: 20*em, borderTopRightRadius: 20*em,
          paddingTop: 20*em, paddingHorizontal: 15*em, paddingBottom: 40*em
        }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16*em, lineHeight: 30*em, color: '#bfbfc4'}}>
              Automatic recharge
            </Text>
            <TouchableOpacity onPress={() => this.setState({...this.state, rechargable:!this.state.rechargable})}>
              {rechargable?
                <Image source={require('images/on-off-grye.png')} />
              :
                <Image source={require('images/on-off-grye.png')} style={{
                  transform: [{rotate: '180deg'}]
                }} />
              }
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: 165*em}}>
              <PriceBox title='5€' subtitle='No bonus' />
            </View>
            <View style={{width: 165*em}}>
              <PriceBox title='10€' subtitle='No bonus' />
            </View>
          </View>
          <View style={{width: '100%'}}>
            <PriceBox title='15€' subtitle='BONUS OF 1€' hasBonus={true} />
          </View>
          <View style={{width: '100%'}}>
            <PriceBox title='20€' subtitle='BONUS OF 2€ OR PLANT A TREE' 
              hasBonus={true} selected={true}
              options={[{title: 'BONUS OF 2€'}, {title: 'PLANT A TREE'}]}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#313131', width: '100%', textAlign: 'center'}}>
              {_t('A deposit of 20€ will be required to rent a battery.')}
            </Text>
          </View>
          {/* Pay box */}
          <View style={{marginTop: 20*em}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5*em}}>
              <Text style={{color: '#9f9f9f', fontSize: 14*em}}>
                {_t('Current method of payment')}:
              </Text>
              <TouchableOpacity style={{flexDirection: 'row', marginLeft: 5*em}}>
                <Text style={{
                  color: '#35cdfa', fontSize: 14*em
                }}>
                  CHANGER
                </Text>
                <Image source={require('images/arrow2.png')} style={{
                  tintColor: '#35cdfa', marginTop: 5*em, marginLeft: 8*em
                }} />
              </TouchableOpacity>
            </View>
            <Button rounded caption='Pay'
              bgColor='#36384a' textColor='#fff'
              icon={require('images/apple.png')} iconColor='#fff'
            />
            <View style={{marginTop: 10*em, marginBottom: 30*em}}>
              <Text style={{width: '100%', textAlign: 'center', fontSize: 13*em, color: '#36384a'}}>
                {_t('NO THANK YOU,I WISH TO PAY BY USE')}
              </Text>
            </View>            
          </View>
          {/* Pay box (end) */}
        </View>        
      </View>
    )
  }
}