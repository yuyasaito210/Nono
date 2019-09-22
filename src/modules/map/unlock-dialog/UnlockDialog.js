import React from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { Left, Right, Title, Body } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


import { Button } from 'native-base';
import { styles } from './UnlockDialog.style';

class UnlockDialog extends React.Component {
  render = () => {
    const { onPressUnlockButton, onClickBack, appActions } = this.props;
    const { _t } = appActions;
    return (
      <>
        <Wrapper>
          <Topbar onClickBack={onClickBack}/>
          <View style={styles.contentContainer}>
            <View style={styles.contentDeputeImageContainer}>
              <Image source={require('images/code-parrainage.png')}/>
            </View>
            <View style={styles.contentTitleContainer}>
              <Text style={styles.contentTitle}>{_t('Referral Code')}</Text>
              <Text style={styles.contentSubtitle}>{_t('Charge your phone for free')}</Text>
            </View>
            <View style={styles.contentDescContainer}>
              <Text style={styles.contentDesc}>
                {_t('Invite a friend to use nono and win 24h free charge after first use')} 
              </Text>
              <Text style={[styles.contentDesc, {marginTop: 20}]}>
                {_t('Your battery goes down!')}

              </Text>
              <Text style={[styles.contentDesc, {fontWeight: 'bold'}]}>
                {_t('Share your code quickly')}
              </Text>
            </View>
            <View style={styles.codeContainer}>
              <Text style={styles.codeOverText}>{_t('Share your code')}</Text>
              <TouchableScale style={styles.codeShareContainer} onPress={onPressUnlockButton}>
                <LinearGradient colors={['#07E28E', '#36F7AD']} style={styles.linearGradient}>
                  <Left/>
                  <Body>
                    <Text style={styles.codeShareText}>
                      {'THEO1827nono'}
                    </Text>
                  </Body>
                  <Right>
                    <Image source={require('images/code-share.png')} style={styles.linearImage} />
                  </Right>
                </LinearGradient>
              </TouchableScale>
            </View>
          </View>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = (props) => (
  <View style={styles.wrapperContainer}>
    <ImageBackground source={require('images/LockDialogBg.png')} style={styles.wrapperBg}>
      {props.children}
    </ImageBackground>
  </View>
)

const Topbar = (props) => (
  <View style={styles.topbarContainer}>
    <BackButton onPress={props.onClickBack}/>
  </View>
)

const BackButton = (props) => (
  <TouchableOpacity
    style={styles.topbarBackButton}
    onPress={() => props.onPress()}
  >
    <Image source={require('images/arrow-blue.png')} />
  </TouchableOpacity>
)

export default UnlockDialog;