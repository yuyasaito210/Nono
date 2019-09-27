import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper } from '../wallet/WalletView';
import { Spacer } from '../../../components';

export default class SettingView extends React.Component {
  state = {

  }
  onSignOut = () => {
    Actions.reset('authorized');
    Actions['login']();
  }
  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <Text style={styles.paramTitle}>{_t('Settings')}</Text>

        <View style={styles.paramInfo}>
          <View> 
            <Text style={styles.paramInfo1}> {_t('Last name')}</Text>
            <Text style={styles.paramInfo2}> {_t('Théo Rouilly')}</Text>
          </View>

          <View style={{marginTop: 20*em}}> 
            <Text style={styles.paramInfo1}> {_t('Phone')}</Text>
            <Text style={styles.paramInfo1}> {_t('00 00 00 00 00')}</Text>
          </View>

          <View style={{marginTop: 20*em}}> 
            <Text style={styles.paramInfo1}> {_t('Email')}</Text>
            <Text style={styles.paramInfo2}> {_t('theorouilly@nono.fr')}</Text>
          </View>

          <View style={{marginTop: 20*em}}> 
            <Text style={styles.paramInfo1}> {_t('Birth date')}</Text>
            <Text style={styles.paramInfo2}> {_t('18/06/2000')}</Text>
          </View>
        </View>

        <Spacer size={50}/>
        <TouchableOpacity style={styles.row} onPress={() => Actions['about_us']()}>
          <Text style={styles.paramInfo2}>{_t('Terms of use')}</Text>
          
          <TouchableOpacity>
            <Image source={require('images/arrow.png')} style={styles.arrowStyle}/>
          </TouchableOpacity>
        </TouchableOpacity>

        <Spacer size={20}/>
        <TouchableOpacity style={styles.row} onPress={() => Actions['about_us']()}>
          <Text style={styles.paramInfo2}>{_t('privacy policy')}</Text>
          
          <TouchableOpacity>
            <Image source={require('images/arrow.png')} style={styles.arrowStyle} />
          </TouchableOpacity>
        </TouchableOpacity>

        <Spacer size={50}/>
        <TouchableOpacity onPress={() => this.onSignOut()}>
          <Text style={{textAlign: 'center', color: '#FE000C', fontSize: 18*em}}>{_t('Sign Out')}</Text>
        </TouchableOpacity>

      </ProfileWrapper>
    )
  }
}
