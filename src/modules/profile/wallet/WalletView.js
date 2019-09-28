import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { W, H, em } from '~/constants/Layout';
import styles from './styles';
import { _t } from '../../AppAction';
import { Button, Spacer } from '~/components';

export default class WalletView extends React.Component {
  state = {
    promoActived: true,
    successPaid: false,
  }

  applePay = () => {
    // TODO
    
    this.setState({successPaid: true})
  }
  render = () => {
    const { _t } = this.props.appActions;
    const { promoActived, successPaid } = this.state;

    return (
      <ProfileWrapper>
        <PageTitle title={_t('Wallet')} optionLink={'pay'}/>
        <Text style={{marginVertical: 10, fontSize: 14, color: '#36394a'}}>
          {_t('Charge your account for benefits')}
        </Text>

        {/* Box 1 */}
        <View style={[
          styles.boxContainer,
          {backgroundColor: '#35cdfa', marginTop: Platform.OS==='ios'?20:0}
        ]}>
          <Image source={require('images/bg17.png')} style={styles.boxBg} />
          <Text style={styles.box1Title}>0,00€</Text>
          <Text style={styles.box1Subtitle}>{_t('Current balance')}</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.18)', paddingTop: 10
          }}>
            <Text style={styles.box1Text}>{_t('Load my account for to have advantages')}</Text>
            <View style={{width: 100}}>
              <Button caption={_t('GO')}
                bgColor='white' textColor='#35cdfa'
                onPress={() => Actions['pay']()}
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
              {backgroundColor: '#07e28e', marginTop: 10}
            ]}>
              <Image source={require('images/flash.png')} style={[styles.boxBg, {tintColor: 'rgba(255, 255, 255, 0.68)'}]} />
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <View>
                  <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>
                    {_t('CODE PROMO')}
                  </Text>
                  <Text style={[styles.box1Subtitle, {color: '#fff'}]}>
                    {_t('Promo code actived')}
                  </Text>
                </View>
                <View style={{width: 100, paddingTop: 20}}>
                  <Button caption={_t('View')}
                    bgColor='rgba(255, 255, 255, 0.5)' textColor='#fff'
                    onPress={() => Actions['add_promocode']()}
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
              {backgroundColor: '#fff', marginTop: 10, borderWidth: 1, borderColor: '#07e2be'}
            ]}>
              <Image source={require('images/flash.png')} style={[styles.boxBg, {tintColor: 'rgba(7, 226, 190, 0.48)'}]} />
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <View>
                  <Text style={{fontSize: 26, color: '#07e2be', fontWeight: 'bold'}}>
                    {_t('CODE PROMO')}
                  </Text>
                  <Text style={[styles.box1Subtitle, {color: '#9f9f9f'}]}>
                    {_t('Add a promo code')}
                  </Text>
                </View>
                <View style={{width: 100, paddingTop: 20}}>
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
        <Spacer size={Platform.OS==='ios'?140:60} />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 5}}>
            <Text style={{color: '#9f9f9f', fontSize: 14}}>
              {_t('Current method of payment')}:
            </Text>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 5}}>
              <Text style={{
                color: '#35cdfa', fontSize: 14
              }}>
                CHANGER
              </Text>
              <Image source={require('images/arrow2.png')} style={{
                tintColor: '#35cdfa', marginTop: 5, marginLeft: 8
              }} />
            </TouchableOpacity>
          </View>
          <Button rounded caption='Pay'
            bgColor='#36384a' textColor='#fff'
            icon={require('images/apple.png')} iconColor='#fff'
            onPress={() => this.applePay()}
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
                  style={{marginVertical: 15}} />
              </View>
              <View style={styles.bottomRow}>
                <Text style={{fontSize: 20, color: '#313131', fontWeight: 'bold'}}>
                  {_t('You chose to plant a tree.')}
                </Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={{fontSize: 14, color: '#313131', marginVertical: 10, width: 230, textAlign: 'center'}}>
                  {_t('Nono and his partner Tree-Nation thank you!')}
                </Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={{fontSize: 12, color: '#6a6a7c', marginVertical: 10}}>
                  {_t('Enter your email address and see where your tree will be planted.')}
                </Text>
              </View>
              <TextInput placeholder='Email'
                style={{backgroundColor: '#dfdfe6', borderRadius: 10, padding: 10, fontSize: 16}}/>
              <View style={[styles.bottomRow, {marginTop: 10, marginBottom: 20}]}>
                <Button bgColor='transparent' textColor='#35cdfa'
                  caption={_t('No thanks')}
                  onPress={() => this.setState({successPaid: false})}
                />
              </View>
            </View>
          </View>
        }                
      </ProfileWrapper>
    )
  }
}

export const ProfileWrapper = ({ children }) => (
  <View style={styles.pageWrapper}>
    <BackButton onBack={() => Actions.pop()}/>
    {children}
  </View>
)

export const PageTitle = ({ title, optionLink }) => (
  <View style={styles.pageTitleContainer}>
    <Text style={styles.pageTitle}>
      {title}
    </Text>
    { optionLink && <PageOption link={optionLink} />}
  </View>
)

export const PageOption = ({link}) => (
  <View style={styles.pageOptionContainer}>
    <TouchableOpacity onPress={() => link && Actions[link]()}>
      <Image source={require('images/option3.png')} />
    </TouchableOpacity>
  </View>
)

const BackButton = ({ onBack }) => (
  <>
    <TouchableOpacity onPress={onBack}>
      <Image source={require('images/arrow.png')} 
        style={styles.backButton} />
    </TouchableOpacity>
  </>
)