import React from 'react';
import {Scene, Stack, Actions } from 'react-native-router-flux';
import RentButteryViewContainer from '../modules/rent_buttery/RentButteryViewContainer';
import EnterQRCodeContainer from '../modules/rent_buttery/enter-code/EnterQRCodeContainer';
import ScanQRCodeContainer from '../modules/rent_buttery/qrscanner/ScanQRCodeContainer';


const RentButteryStack = (
  <Stack
    key={'rent_buttery'}
    hideNavBar
    tabBarLabel="Rent Battery"
  >
    <Scene
      key='scan_qr'
      component={ScanQRCodeContainer}
      hideNavBar
    />
    <Scene
      key='enter_code'
      component={EnterQRCodeContainer}
      hideNavBar
    />
    <Scene
      key='rent_buttery_feedback'
      hideNavBar
      component={RentButteryViewContainer}
    />
  </Stack>
)

export default RentButteryStack;