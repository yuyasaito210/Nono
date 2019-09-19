import React from 'react';
import { Actions } from 'react-native-router-flux';

import { GuideCommonView } from '../../components';


export default class GuideFindStationView extends React.Component {
  render() {
    const { appActions } = this.props;
    const { _t } = appActions;
    return (
      <GuideCommonView
        imageSource={require('../../assets/images/png/guide-find-station.png')}  
        guideTitle={_t("Find a station")} 
        guideDescription={_t("The app guides you to the nearest partner site")} 
        nextButtonTitle={_t('Next')}
        onClickNext={Actions['guideScan']}
      />
    )
  }
}
