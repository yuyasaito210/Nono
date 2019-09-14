import React from 'react';
import { Actions } from 'react-native-router-flux';

import { GuideCommonView } from '../../components';


export default class GuideSaveView extends React.Component {
  render() {
    const { appActions } = this.props;
    const { _t } = appActions;
    return (
      <GuideCommonView
        imageSource={require('../../../assets/images/png/guide-bring-back.png')}  
        guideTitle={_t("Bring back your nono")} 
        guideDescription={_t('Choose the nearest partner institution')} 
        nextButtonTitle={_t('Next')}
        onClickNext={Actions['guideSponsor']}
      />
    )
  }
}
