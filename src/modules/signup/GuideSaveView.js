import React from 'react';
import { Actions } from 'react-native-router-flux';

import { GuideCommonView } from '../../components';


export default class GuideSaveView extends React.Component {
  render() {
    const { appActions } = this.props;
    const { _t } = appActions;
    return (
      <GuideCommonView
        imageSource={require('../../../assets/images/png/guide-save.png')}  
        guideTitle={_t("That\'s it... you\'re saved!")} 
        guideDescription={_t('Choose the right cable and charge your phone freely')} 
        nextButtonTitle={_t('Next')}
        onClickNext={Actions['guideBringBack']}
      />
    )
  }
}
