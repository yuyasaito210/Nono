import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { GuideCommonView } from '../../components';


export default class GuideSaveView extends React.Component {
  render() {
    const { appActions } = this.props;
    const { _t } = appActions;
    return (
      <GuideCommonView
        nextPath={'guideSave'}
        imageSource={require('../../../assets/images/png/guide-scan.png')}  
        guideTitle={_t("Scan and unlock a nono")} 
        guideDescription={`${_t('Scan the QR code on the station.')} ${_t('Your nono is unlocked!')}`} 
        nextButtonTitle={_t('Next')}
      />
    )
  }
}
