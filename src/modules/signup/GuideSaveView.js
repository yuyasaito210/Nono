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
        nextPath={'guideBringBack'}
        imageSource={require('../../../assets/images/png/guide-save.png')}  
        guideTitle={_t("That\'s it... you\'re saved!")} 
        guideDescription={_t('Choose the right cable and charge your phone freely')} 
        nextButtonTitle={_t('Next')}
      />
    )
  }
}
