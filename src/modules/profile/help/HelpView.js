import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper } from '../wallet/WalletView';

export default class HelpView extends React.Component {
  state = {

  }
  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>

        <Text style={styles.paramTitle}>{_t('Need help ?')}</Text>

        <View style={{marginTop: 30, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/guide-utilisation.png')} style={{tintColor: '#49D2FB'}}/>
          </TouchableOpacity>
          
          <Text style={{marginLeft: 10, fontSize: 16}}>{_t('User manual')}</Text>
        </View>

        <View style={{marginTop: 30, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/signaler-problem.png')} style={{tintColor: '#49D2FB'}}/>
          </TouchableOpacity>
          
          <Text style={{marginLeft: 10, fontSize: 16}}>{_t('to report a problem')}</Text>
        </View>

        <View style={{marginTop: 30, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/discutez-avec-nous.png')} style={{tintColor: '#49D2FB'}}/>
          </TouchableOpacity>
          
          <Text style={{marginLeft: 10, fontSize: 16}}>{_t('Chat with us')}</Text>
        </View>

        <View style={{marginTop: 30, flexDirection: 'row', alignItem: 'center'}}>
          <TouchableOpacity  >
            <Image source={require('images/star.png')} style={{tintColor: '#49D2FB', width: 23, height: 23}}/>
          </TouchableOpacity>
          
          <Text style={{marginLeft: 10, fontSize: 16}}>{_t('Notez notre Application ')}</Text>
        </View>

      </ProfileWrapper>
    )
  }
}
