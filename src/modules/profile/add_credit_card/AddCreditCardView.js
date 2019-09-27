import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper } from '../wallet/WalletView';

export default class AddCreditCardView extends React.Component {

  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <Text style={styles.paramTitle}>{_t('Add a card')}</Text>

        <View style={{flexDirection: 'row', alignItem: 'center', flex: 1}}>

          <View style={{alignItem: 'center', flex: 1}}>
            <Text style={styles.addInfo1}>{_t('Lydia')}</Text>
          </View>

          <View style={{flex: 1}}>
            <Button rounded
              caption={_t('Validate')}
              bgColor='#36384A'
              textColor='#FFFFFF'
              style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20}}
            />
          </View>
        </View>

      </ProfileWrapper>
    )
  }
}
