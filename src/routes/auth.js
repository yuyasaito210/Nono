/**
 * Auth Scenes
 *
 * RDS Customer Face App
 * https://github.com/ninjarails/reddot-reactnative
 */
import React from 'react';
import {Router, Scene, Stack, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import DefaultProps from '../constants/navigation';
// Scenes
import LoginViewContainer from '../modules/login/LoginViewContainer';
import SignupViewContainer from '../modules/signup/SignupViewContainer';

/* Routes ==================================================================== */
const scenes = (
	  <Stack key="authenticate">
	    <Scene
	      key="login"
	      component={LoginViewContainer}
	      analyticsDesc="Login"
	      hideNavBar>
				<Scene
					back
					key="signup"
					title="SIGN UP"
					{...DefaultProps.navbarProps}
					component={SignupViewContainer}
				/>
			</Scene>
	  </Stack>
);

export default scenes;
