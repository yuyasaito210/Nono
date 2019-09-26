import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper } from '../wallet/WalletView';

export default class PaymentView extends React.Component {

  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <Text style={styles.paramTitle}>{_t('Payment')}</Text>

        <Text style={styles.payInfo}>{_t('Mode de paiement actif')}</Text>


        <View style={{marginTop: 50, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/Lydia-add.png')} />
          </TouchableOpacity>
          
          <View style={{marginLeft: 15, alignItem: 'center'}}>
            <Text style={styles.addInfo1}>{_t('Lydia')}</Text>
            <Text style={styles.addInfo2}>{_t('theorouilly@nono.fr')}</Text>
          </View>
          
          <TouchableOpacity style={{left: 130}} >
            <Image source={require('images/remove.png')} style={{ marginTop: 5}}/>
          </TouchableOpacity>

        </View>


        <View style={{marginTop: 30, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/add-card.png')} />
          </TouchableOpacity>
          
          <Text style={{marginLeft: 10, fontSize: 16}}>{_t('Ajoute une carte de crédit')}</Text>

          <TouchableOpacity style={{left: 95}} >
            <Image source={require('images/arrow.png')} style={{ marginTop: 5, width:15, height:15, color: '#FFF', tintColor: '#DFDFE6', transform: [{rotate: '180deg'}]}}/>
          </TouchableOpacity>
        </View>

        <View style={{top: 330}}>
          <Button rounded
            caption='Ajoute un compte Lydia'
            bgColor='#06A2F1' textColor='#FFFFFF'
            icon={require('images/lydia.png')} iconColor='#FFFFFF'
          />
          <Button rounded
            caption='Ajoute un compte Lydia'
            bgColor='#36384A' textColor='#FFFFFF'
            icon={require('images/apple.png')} iconColor='#FFFFFF'
            style={{ marginTop: 10}}
          />
        </View>
      </ProfileWrapper>
    )
  }
}
