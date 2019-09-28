import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Spacer } from '~/components';
import { W, H } from '~/constants/Layout';
import { ProfileWrapper } from '../wallet/WalletView';
import { colors } from '~/styles';
import styles from './styles';

export default class PaymentView extends React.Component {

  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <Spacer size={20} />
        <Text style={styles.paramTitle}>{_t('Payment')}</Text>
        <Spacer size={20} />
        <Text style={styles.payInfo}>{_t('Mode de paiement actif')}</Text>

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

        <View style={styles.buttonGroupContainer}>
          <Button rounded
            caption={_t('Add a Lydia account')}
            bgColor={colors.darKBlue} textColor={colors.white}
            icon={require('images/lydia.png')} iconColor={colors.white}
            style={styles.button}
          />
          <Spacer size={10} />
          <Button rounded
            caption={_t('Add Apple Pay')}
            bgColor={colors.black} textColor={colors.white}
            icon={require('images/apple.png')} iconColor={colors.white}
            style={styles.button}
          />
        </View>
      </ProfileWrapper>
    )
  }
}
