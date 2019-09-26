import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';
import { _t } from '../../AppAction';
import { Button } from '~/components';
import { ProfileWrapper, PageTitle } from './WalletView';

export default class WalletView extends React.Component {
  render = () => {
    const { _t } = this.props.appActions;

    return (
      <ProfileWrapper>
        <BackButton onBack={() => this.goBack()} />
        <PageTitle title={_t('Add a promo code')} />
        <View>
          <TextInput placeholder='CODE PROMO' style={{
            fontSize: 26*em, color: 'white', borderColor: '#35cdfa', borderWidth: 1,
            backgroundColor: '#07e28e', padding: 20*em,
            borderRadius: 20*em
          }} />
        </View>
        <View style={{marginTop: 160*em}}>
          <Button rounded caption={_t('Validate')}
            bgColor='rgba(7, 226, 142, 0.5)' textColor='white'
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
      <Image source={require('images/cross.png')} 
        style={[styles.backButton, {tintColor: '#9f9f9f'}]} />
    </TouchableOpacity>
  </>
)