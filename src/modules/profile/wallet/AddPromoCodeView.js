import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';
import { _t } from '../../AppAction';
import { Button } from '~/components';
import { ProfileWrapper, PageTitle } from './WalletView';
import { ActionConst, Actions } from 'react-native-router-flux';

export default class WalletView extends React.Component {
  render = () => {
    const { _t } = this.props.appActions;

    return (
      <ProfileWrapper>
        <PageTitle title={_t('Add a promo code')} />
        <View>
          <TextInput placeholder='CODE PROMO' style={{
            fontSize: 26, color: 'white', borderColor: '#35cdfa', borderWidth: 1,
            backgroundColor: '#07e28e', padding: 20,
            borderRadius: 20
          }} />
        </View>
        <View style={{marginTop: 160}}>
          <Button rounded caption={_t('Validate')}
            bgColor='rgba(7, 226, 142, 0.5)' textColor='white'
            onPress={() => Actions.pop()}
          />
        </View>
      </ProfileWrapper>
    )
  }
}