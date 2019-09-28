import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Spacer } from '~/components';
import { ProfileWrapper } from '../wallet/WalletView';
import { W, H } from '~/constants/Layout';
import styles from './styles';


export default class AddCreditCardView extends React.Component {

  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <Spacer size={20} />
        <Text style={styles.paramTitle}>{_t('Ajouter une carte')}</Text>

        <View
          style={{height: 70, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => Actions['addCreditCard']()}
        >
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={require('images/Lydia-add.png')} />
          </View>
          
          <View style={{flex: 7, paddingLeft: 15}}>
            <Text style={styles.addInfo1}>{_t('Lydia')}</Text>
            <Text style={styles.addInfo2}>{_t('theorouilly@nono.fr')}</Text>
          </View>

          <View style={{flex: 1, alignItems: 'center'}} >
            <Image source={require('images/remove.png')}/>
          </View>
        </View>


        <TouchableOpacity
          style={{height: 70, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => Actions['addCreditCard']()}
        >
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={require('images/add-card.png')} />
          </View>
          
          <View style={{flex: 7, paddingLeft: 15}}>
            <Text style={{textAlign: 'left', fontSize: 16}}>{_t('Add a credit card')}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}} >
            <Image
              source={require('images/arrow.png')}
              style={{ width:15, height:15, tintColor: '#DFDFE6', transform: [{rotate: '180deg'}]}}
            />
          </View>
        </TouchableOpacity>

        <View style={{left: 20, width: W-40, bottom: 30, position: 'absolute'}}>
          <Button rounded
            caption={_t('Add Apple Pay')}
            bgColor='#36384A' textColor='#FFFFFF'
            icon={require('images/apple.png')} iconColor='#FFFFFF'
            style={{ marginTop: 10}}
          />
        </View>
      </ProfileWrapper>
    )
  }
}
