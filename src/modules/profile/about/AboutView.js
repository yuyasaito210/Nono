import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper } from '../wallet/WalletView';

export default class AboutView extends React.Component {
  state = {

  }
  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <ScrollView style={{height: 700}}>
          <Text style={styles.paramTitle}>{_t('About us')}</Text>

          <View  style={styles.imgSetting} >
            <Image source={require('images/logo-color.png')} style={{marginTop: 20}}/>
            <Image source={require('images/Union-32.png')} style={{marginTop: 10, width: 50, height: 10}}/>
          </View>

          <View style={styles.paraSection}>
            <Text style={styles.paramInfo}> {_t('Nono is above all the adventure and the project of two students.')}</Text>
            <Text style={styles.paramInfo}> {_t('Through the nono service, we wanted to offer a new solution to recharge his laptop in order to accompany and facilitate the daily life of the French.')}</Text>
            <Text style={styles.paramInfo}> {_t('Our goal was also to provide an adapted and flexible solution for our partner sites with an added value for their establishment.')}</Text>
            <Text style={styles.paramInfo}> {_t('We have developed this activity while trying to deal with the climate issues of our time. This is why we have surrounded ourselves with stakeholders at different levels of our business to make it as environmentally responsible as possible.')}</Text>
          </View>

          <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', top: 15}}>
            <Image source={require('images/Bio-bee-box.png')} style={{margin: 15}} />
            <Image source={require('images/beeandgo.png')} style={{margin: 15}} />
            <Image source={require('images/tree-nation.png')} style={{margin: 15}}/>
          </View>
          <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={require('images/screlec.png')} style={{margin: 15 }}/>
            <Image source={require('images/batribox.png')} style={{margin: 15}}/>
          </View>

          <View style={styles.paraSection}>
            <Text style={styles.paramInfo}> {_t('Discover more about our partners on our website.')}</Text>
            <Text style={{textAlign: 'center', marginTop: 15, fontSize: 14, color: '#35CDFA'}}> {_t('www.nono.fr')}</Text>
          </View>

        </ScrollView>
        


      </ProfileWrapper>
    )
  }
}