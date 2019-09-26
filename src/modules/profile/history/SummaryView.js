import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import { Button } from '~/components';
import { W, H, em } from '~/constants/Layout';
import { ProfileWrapper, PageTitle, PageOption } from '../wallet/WalletView';
import LinearGradient from 'react-native-linear-gradient';

export default class SummaryView extends React.Component {

  render = () => {
    const { _t } = this.props.appActions;
    return (
      <ProfileWrapper>
        <PageTitle title={_t('Summary')}/>
        <View>
          <View style={styles.summaryRow}>
            <View style={styles.summaryCol1}>
              <Image source={require('images/hours.png')} style={{tintColor: '#35cdfa'}} />
            </View>
            <View style={styles.summaryCol2}>
              <Text style={{color: '#bfbfc4', marginVertical: 5*em}}>
                {_t('Duration')}
              </Text>
              <Text style={{color: '#36384a', fontSize: 22*em, fontWeight: 'bold' ,
                marginVertical: 5*em
              }}>
                30 min
              </Text>
            </View>
          </View>
          <View style={styles.summaryRow}>
            <View style={styles.summaryCol1}>
              <Image source={require('images/line21.png')} />
            </View>
            <View style={styles.summaryCol2}>
              <Text style={{color: '#bfbfc4', fontSize: 14*em, marginVertical: 5*em}}>
                {_t('Place of taking')}
              </Text>
              <Text style={{color: '#36384a', fontSize: 16*em
              }}>
                79 Rue de Seine, 75006 Paris
              </Text>
              <Text style={{color: '#bfbfc4', marginTop: 14*em, marginBottom: 5*em}}>
                {_t('Place of deposit')}
              </Text>
              <Text style={{color: '#36384a', fontSize: 16*em
              }}>
                155 Boulevard Saint-Germain 75006 Paris
              </Text>
            </View>
          </View>
        </View>
        <View style={{
          position: 'absolute', left: 0, bottom: 0, width: W, 
          borderTopLeftRadius: 20*em, borderTopRightRadius: 20*em, overflow: 'hidden'
        }}>
          <LinearGradient 
            start={{ x:1, y:0 }} end={{ x:1, y:1 }}
            colors={['#ffdf00', '#ff5248']}
            style={{ paddingHortizontal: 20*em, paddingBottom: 20*em, paddingTop: 5*em }}
          >
            <View style={{flex: 1, alignItems: 'center', marginVertical: 3*em}}>
              <Image source={require('images/slide.png')} style={{tintColor: 'white'}} />
            </View>
            <View style={{flex: 1, alignItems: 'center', marginVertical: 20*em }}>
              <Text style={[styles.whiteText, {fontSize: 24*em, fontWeight: 'bold'}]}>
                {_t('Consumption')}
              </Text>
            </View>
            <View style={styles.consumeRow}>
              <View style={styles.consumeCol1}>
                <Text style={styles.whiteText}>
                  {_t('Time')}
                </Text>
              </View>
              <View style={styles.consumeCol2}>
                <Text style={styles.whiteText}>
                  30 min
                </Text>
              </View>
            </View>
            <View style={styles.consumeRow}>
              <View style={styles.consumeCol1}>
                <Text style={styles.whiteText}>
                  {_t('Cost')}
                </Text>
              </View>
              <View style={styles.consumeCol2}>
                <Text style={styles.whiteText}>
                  15.6€
                </Text>
              </View>
            </View>
            <View style={styles.consumeRow}>
              <View style={styles.consumeCol1}>
                <Text style={styles.whiteText}>
                  {_t('Credit')}
                </Text>
              </View>
              <View style={styles.consumeCol2}>
                <Text style={styles.whiteText}>
                  0.00€
                </Text>
              </View>
            </View>
            <View style={[
              styles.consumeRow,
              {paddingVertical: 20*em, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)', marginHorizontal: 0, paddingHorizontal: 20*em}
            ]}>
              <View style={styles.consumeCol1}>
                <Text style={styles.whiteText}>
                  {_t('TOTAL')}
                </Text>
              </View>
              <View style={styles.consumeCol2}>
                <Text style={styles.whiteText}>
                  15.6€
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ProfileWrapper>
    )
  }
}