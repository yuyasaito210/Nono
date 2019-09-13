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
        nextPath={'guideAddPayment'}
        imageSource={require('../../../assets/images/png/guide-sponsor.png')}  
        guideTitle={_t("Sponsor your friends")} 
        guideDescription={_t('Earn credits to each sponsored friend!')} 
        nextButtonTitle={_t('Next')}
      />
    )
  }
}
