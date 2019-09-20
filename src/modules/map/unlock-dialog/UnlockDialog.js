import React from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { styles } from './UnlockDialog.style';

class LockDialog extends React.Component {
  render = () => {
    return (
      <>
        <Wrapper>
          <Topbar />
          <View style={styles.contentContainer}>
            <View style={styles.contentDeputeImageContainer}>
              <Image source={require('images/code-parrainage.png')}/>
            </View>
            <View style={styles.contentTitleContainer}>
              <Text style={styles.contentTitle}>Code de parrainage</Text>
              <Text style={styles.contentSubtitle}>Charge ton téléphone gratuitement</Text>
            </View>
            <View style={styles.contentDescContainer}>
              <Text style={styles.contentDesc}>
                Invite un ou une ami(e) à utiliser nono et gagne 24h de charge gratuite après sa première utilisation 
              </Text>
              <Text style={[styles.contentDesc, {marginTop: 20}]}>
                Ta batterie baisse !

              </Text>
              <Text style={[styles.contentDesc, {fontWeight: 'bold'}]}>
              Partage vite ton code
              </Text>
            </View>
            <View style={styles.codeContainer}>
              <Text style={styles.codeOverText}>Partage ton code</Text>
              <View style={styles.codeShareContainer}>
                <Text style={styles.codeShareText}>
                THEO1827nono
                </Text>
                <TouchableOpacity style={styles.codeShareButton}>
                  <Image source={require('images/code-share.png')}></Image>
                </TouchableOpacity>
              </View>
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

const Topbar = () => (
  <View style={styles.topbarContainer}>
    <BackButton />
  </View>
)

const BackButton = () => (
  <TouchableOpacity style={styles.topbarBackButton}>
    <Image source={require('images/arrow-blue.png')} />
  </TouchableOpacity>
)

export default LockDialog;