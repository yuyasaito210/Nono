import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';
import { _t } from '../../AppAction';
import { Button } from '~/components';

export default class WalletView extends React.Component {
  state = {
    promoActived: true,
    successPaid: false,
  }
  render = () => {
    const { _t } = this.props.appActions;
    const { promoActived, successPaid } = this.state;

    return (
      <ProfileWrapper>
        <BackButton onBack={() => this.goBack()}/>
        <PageTitle title={_t('Wallet')} />
        <PageOption />
        <Text style={{marginVertical: 10*em, fontSize: 14*em, color: '#36394a'}}>
          {_t('Charge your account for benefits')}
        </Text>

        {/* Box 1 */}
        <View style={[
          styles.boxContainer,
          {backgroundColor: '#35cdfa', marginTop: 20*em}
        ]}>
          <Image source={require('images/bg17.png')} style={styles.boxBg} />
          <Text style={styles.box1Title}>0,00€</Text>
          <Text style={styles.box1Subtitle}>{_t('Current balance')}</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.18)', paddingTop: 10*em
          }}>
            <Text style={styles.box1Text}>{_t('Load my account for to have advantages')}</Text>
            <View style={{width: 100*em}}>
              <Button caption={_t('GO')}
                bgColor='white' textColor='#35cdfa'
              />
            </View>            
          </View>          
        </View>
        {/* Box 1 (end) */}

        {promoActived?
          <>
            {/* Box 2-actived */}
            <View style={[
              styles.boxContainer,
              {backgroundColor: '#07e28e', marginTop: 10*em}
            ]}>
              <Image source={require('images/flash.png')} style={[styles.boxBg, {tintColor: 'rgba(255, 255, 255, 0.68)'}]} />
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <View>
                  <Text style={{fontSize: 26*em, color: '#fff', fontWeight: 'bold'}}>
                    {_t('CODE PROMO')}
                  </Text>
                  <Text style={[styles.box1Subtitle, {color: '#fff'}]}>
                    {_t('Promo code actived')}
                  </Text>
                </View>
                <View style={{width: 100*em, paddingTop: 20*em}}>
                  <Button caption={_t('View')}
                    bgColor='rgba(255, 255, 255, 0.5)' textColor='#fff'
                  />
                </View>
              </View>
            </View>
            {/* Box 2-actived (end) */}
          </>
        :
          <>
            {/* Box 2 */}
            <View style={[
              styles.boxContainer,
              {backgroundColor: '#fff', marginTop: 10*em, borderWidth: 1, borderColor: '#07e2be'}
            ]}>
              <Image source={require('images/flash.png')} style={[styles.boxBg, {tintColor: 'rgba(7, 226, 190, 0.48)'}]} />
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <View>
                  <Text style={{fontSize: 26*em, color: '#07e2be', fontWeight: 'bold'}}>
                    {_t('CODE PROMO')}
                  </Text>
                  <Text style={[styles.box1Subtitle, {color: '#9f9f9f'}]}>
                    {_t('Add a promo code')}
                  </Text>
                </View>
                <View style={{width: 100*em, paddingTop: 20*em}}>
                  <Button caption={_t('Add')}
                    bgColor='#07e28e' textColor='#fff'
                  />
                </View>
              </View>
            </View>
            {/* Box 2 (end) */}
          </>
        }
        {/* Pay box */}
        <View style={{marginTop: 170*em}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5*em}}>
            <Text style={{color: '#9f9f9f', fontSize: 14*em}}>
              {_t('Current method of payment')}:
            </Text>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 5*em}}>
              <Text style={{
                color: '#35cdfa', fontSize: 14*em
              }}>
                CHANGER
              </Text>
              <Image source={require('images/arrow2.png')} style={{
                tintColor: '#35cdfa', marginTop: 5*em, marginLeft: 8*em
              }} />
            </TouchableOpacity>
          </View>
          <Button rounded caption='Pay'
            bgColor='#36384a' textColor='#fff'
            icon={require('images/apple.png')} iconColor='#fff'
          />
        </View>
        {/* Pay box (end) */}
        {successPaid &&
          <View style={styles.bottomBoxOveride}>
            <View style={styles.bottomBox}>
              <View style={styles.bottomRow}>
                <Image source={require('images/slide.png')} />
              </View>
              <View style={styles.bottomRow}>
                <Image source={require('images/plant.png')} 
                  style={{marginVertical: 15*em}} />
              </View>
              <View style={styles.bottomRow}>
                <Text style={{fontSize: 20*em, color: '#313131', fontWeight: 'bold'}}>
                  {_t('You chose to plant a tree.')}
                </Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={{fontSize: 14*em, color: '#313131', marginVertical: 10*em, width: 230*em, textAlign: 'center'}}>
                  {_t('Nono and his partner Tree-Nation thank you!')}
                </Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={{fontSize: 12*em, color: '#6a6a7c', marginVertical: 10*em}}>
                  {_t('Enter your email address and see where your tree will be planted.')}
                </Text>
              </View>
              <TextInput placeholder='Email'
                style={{backgroundColor: '#dfdfe6', borderRadius: 10*em, padding: 10*em, fontSize: 16*em}}/>
              <View style={[styles.bottomRow, {marginTop: 10*em, marginBottom: 20*em}]}>
                <Button bgColor='transparent' textColor='#35cdfa'
                  caption={_t('No thanks')}
                />
              </View>
            </View>
          </View>
        }                
      </ProfileWrapper>
    )
  }

  goBack = () => {
    Actions['profile']();
  }
}

export const ProfileWrapper = ({ children }) => (
  <View style={styles.pageWrapper}>
    {children}
  </View>
)

export const PageTitle = ({ title }) => (
  <View>
    <Text style={styles.pageTitle}>
      {title}
    </Text>
  </View>
)

export const PageOption = () => (
  <View style={styles.pageOptionContainer}>
    <TouchableOpacity>
      <Image source={require('images/option3.png')} />
    </TouchableOpacity>    
  </View>
)

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