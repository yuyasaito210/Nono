import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../../components/StyledText';
import styles from './styles';
import ScanQRCodeContainer from './qrscanner/ScanQRCodeContainer';
import EnterQRCodeContainer from './enter-code/EnterQRCodeContainer';
import MapSection from './map-section/MapSection';
import MapButtonsLayer from './map-buttons/MapButtonsLayer';
import RentBox from './rent/RentBox';
import UnlockBox from './rent/UnlockBox';
import FeedbackDialog from './feedback/FeedbackDialog';

export default class RentButterryView extends Component {
  state = {
    pageStatus: 'scanQRCode',
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
  // ScanQRCode
  onSwitchToQRCodeInput = () => this.setState({pageStatus: 'enterQRCode'});
  onReadQRCode = (qrCode) => {
    this.setState({pageStatus: 'openRentBox'});
  };
  // EnterQRCode
  onSwitchToQRScanner = () => {
    this.setState({pageStatus: 'scanQRCode'});
  }
  onGoToLocation = (qrCode) => {
    this.setState({pageStatus: 'openRentBox'});
  }
  
  render() {
    const { pageStatus } = this.state;
    const { region, places } = this.state;
    return (
      <>        
        {pageStatus=='scanQRCode' && 
          <ScanQRCodeContainer onSwitchToQRCodeInput={this.onSwitchToQRCodeInput}/>
        }
        {pageStatus=='enterQRCode' && 
          <EnterQRCodeContainer onSwitchToQRScanner={onSwitchToQRScanner} onGoToLocation={onGoToLocation}/>
        }
        {pageStatus=='openRentBox' && 
          <>
            <MapSection region={region} places={places} />
            <MapButtonsLayer 
              profile
              gift
              search
              refresh
              target
            />
            <RentBox />
          </>
        }
        {pageStatus=='openUnlockBox' && 
          <>
            <MapSection region={region} places={places} />
            <MapButtonsLayer 
              profile
              gift
              search
              refresh
              target
            />
            <UnlockBox />
          </>
        }
        {pageStatus=='openFeedbackDialog' && 
          <>
            <MapSection region={region} places={places} />
            <MapButtonsLayer 
              profile
              gift
              search
              refresh
              target
            />
            <FeedbackDialog />
          </>
        }
      </>
    );
  }
}
