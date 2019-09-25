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
        <BackButton onBack={() => this.goBack()}/>
        <Text style={styles.paramTitle}>{_t('Payment')}</Text>

        <Text style={styles.payInfo}>{_t('Mode de paiement actif')}</Text>


        <View style={{marginTop: 50*em, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/Lydia-add.png')} />
          </TouchableOpacity>
          
          <View style={{marginLeft: 15*em, alignItem: 'center'}}>
            <Text style={styles.addInfo1}>{_t('Lydia')}</Text>
            <Text style={styles.addInfo2}>{_t('theorouilly@nono.fr')}</Text>
          </View>
          
          <TouchableOpacity style={{left: 130*em}} >
            <Image source={require('images/remove.png')} style={{ marginTop: 5*em}}/>
          </TouchableOpacity>

        </View>


        <View style={{marginTop: 30*em, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/add-card.png')} />
          </TouchableOpacity>
          
          <Text style={{marginLeft: 10*em, fontSize: 16*em}}>{_t('Ajoute une carte de crédit')}</Text>

          <TouchableOpacity style={{left: 95*em}} >
            <Image source={require('images/arrow.png')} style={{ marginTop: 5*em, width:15*em, height:15*em, color: '#FFF', tintColor: '#DFDFE6', transform: [{rotate: '180deg'}]}}/>
          </TouchableOpacity>
        </View>

        <View style={{top: 330*em}}>
          <Button rounded
            caption='Ajoute un compte Lydia'
            bgColor='#06A2F1' textColor='#FFFFFF'
            icon={require('images/lydia.png')} iconColor='#FFFFFF'
          />
          <Button rounded
            caption='Ajoute un compte Lydia'
            bgColor='#36384A' textColor='#FFFFFF'
            icon={require('images/apple.png')} iconColor='#FFFFFF'
            style={{ marginTop: 10*em}}
          />
        </View>
        

      </ProfileWrapper>
    )
  }
  
  goBack = () => {
    Actions['profile']();
  }
}

const BackButton = ({ onBack }) => (
  <>
    <TouchableOpacity 
      onPress={onBack}
    >
      <Image source={require('images/arrow.png')} 
        style={styles.backButton} />
    </TouchableOpacity>
  </>
)