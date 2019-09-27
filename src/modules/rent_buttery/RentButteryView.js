import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Text } from '../../components/StyledText';
import styles from './styles';
import MapSectionContainer from '~/modules/map/map-section/MapSectionContainer';
import MapButtonsLayer from '~/modules/map/map-buttons/MapButtonsLayer';
import RentBoxContainer from './rent/RentBoxContainer';
import UnlockBoxContainer from './rent/UnlockBoxContainer';
import FeedbackDialogContainer from './feedback/FeedbackDialogContainer';

export default class RentButterryView extends Component {
  state = {
    pageStatus: 'openRentBox',
    region: {
      latitude: 37.321996988,
      longitude: -122.0325472123455,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    places: [
      {
        name: 'Place 1',
        coords: {
          latitude: 37.351996988,
          longitude: -122.0425472123455,
        }
      },
      {
        name: 'Place 2',
        coords: {
          latitude: 37.301996988,
          longitude: -122.0525472123455,
        }
      }
    ]
  }

  // pageStatus  - scanQRcode, enterQRCode, openRentBox, openUnlockBox, openFeedbackDialog
  onClickBuy = () => {
    this.setState({pageStatus: 'openUnlockBox'});
  };

  onClickDiposite = () => {
    this.setState({pageStatus: 'openUnlockBox'});
  };

  onGotoFeedback = () => {
    this.setState({pageStatus: 'openFeedbackDialog'});
  };

  onSendRating = (score) => {
    Actions.reset('authorized');
    // Actions['scan_qr']();
  }
  onClickLater = () => {
    Actions.reset('authorized');
  }

  render() {
    const { pageStatus } = this.state;
    const { region, places } = this.state;
    return (
      <>
        <MapSectionContainer region={region} places={places} />
        <MapButtonsLayer 
          profile
          gift
          search
          refresh
          target
          bottomExtra={80}
        />
        {pageStatus=='openRentBox' && <RentBoxContainer onClickDiposite={this.onClickDiposite} />}
        {pageStatus=='openUnlockBox' && <UnlockBoxContainer onGotoFeedback={this.onGotoFeedback}/>}
        {pageStatus=='openFeedbackDialog' && <FeedbackDialogContainer onSendRating={this.onSendRating} onClickLater={this.onClickLater}/>}
      </>
    );
  }
}
