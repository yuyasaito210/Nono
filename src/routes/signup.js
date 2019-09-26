import React from 'react';
import {Scene, Stack } from 'react-native-router-flux';
``
import SignupViewContainer from '../modules/signup/SignupViewContainer';
import SetConfirmCodeViewContainer from '../modules/signup/SetConfirmCodeViewContainer';
import SetUserNameViewContainer from '../modules/signup/SetUserNameViewContainer';
import SetEmailViewContainer from '../modules/signup/SetEmailViewContainer';
import SetBirthdayViewContainer from '../modules/signup/SetBirthdayViewContainer';
import GuideAddPaymentViewContainer from '../modules/signup/GuideAddPaymentViewContainer';
import GuideBringBackViewContainer from '../modules/signup/GuideBringBackViewContainer';
import GuideFindStationViewContainer from '../modules/signup/GuideFindStationViewContainer';
import GuideSaveViewContainer from '../modules/signup/GuideSaveViewContainer';
import GuideScanViewContainer from '../modules/signup/GuideScanViewContainer';
import GuideSponsorViewContainer from '../modules/signup/GuideSponsorViewContainer';
import { SetInfoHeader, GuideHeader } from './header/header';


const SignupStack = (
        <Stack
          key={'signup'}
          tabBarLabel="Sign Up"
          default
        >
          <Scene
            key='signup'
            title='Create Account'
            hideNavBar
            component={SignupViewContainer}
          />
          <Scene
            back
            key='setConfirmCode'
            analyticsDesc='Confirm code'
            header={SetInfoHeader('')}
            component={SetConfirmCodeViewContainer}
          />
          <Scene
            back
            key='setUserName'
            analyticsDesc='Input your name'
            header={SetInfoHeader('')}
            component={SetUserNameViewContainer}
          />
          <Scene
            back
            key='setEmail'
            analyticsDesc='Input your email'
            header={SetInfoHeader('')}
            component={SetEmailViewContainer}
          />
          <Scene
            back
            key='setBirthday'
            analyticsDesc='Input your birthday'
            header={SetInfoHeader('')}
            component={SetBirthdayViewContainer}
          />
          <Scene
            back
            key='guideFindStation'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideFindStationViewContainer}
          />
          <Scene
            back
            key='guideScan'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideScanViewContainer}
          />
          <Scene
            back
            key='guideSave'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideSaveViewContainer}
          />
          <Scene
            back
            key='guideBringBack'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideBringBackViewContainer}
          />
          <Scene
            back
            key='guideSponsor'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideSponsorViewContainer}
          />
          <Scene
            back
            key='guideAddPayment'
            title='nono'
            header={GuideHeader('nono')}
            component={GuideAddPaymentViewContainer}
          />
        </Stack>
      );

export default SignupStack;
