import React, { Component } from 'react'
import {
	Text,
	View,
	StatusBar
} from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

import { Router, Scene, Stack, Actions } from 'react-native-router-flux'

import LoginViewContainer from '../modules/login/LoginViewContainer';
import SignupViewContainer from '../modules/signup/SignupViewContainer';
import HomeViewContainer from '../modules/home/HomeViewContainer';
import MapScreen from '../modules/map/MapView';
import LinksScreen from '../modules/links/LinksView';
import SettingsScreen from '../modules/settings/SettingsView';

import { colors, fonts } from '../styles';

const headerBackground = require('../../assets/images/topBarBg.png');

class TabIcon extends Component {
	render() {
		return (
			<View>
				<Icon name={this.props.iconName || 'circle'} size={18} />
				<Text>{this.props.title}</Text>
			</View>
		)
	}
}

class NonoRoutes extends Component {
	componentDidMount() {
		StatusBar.setBarStyle('light-content')
		if (this.props.isAuthenticated) {
			Actions['home']();
		}
	}

	componentWillMount() {
	}

	render() {
		return (
			<Router>
				<Scene key="root" hideNavBar>
					<Scene
						key="login"
						component={LoginViewContainer}
						analyticsDesc="Login"
						hideNavBar
					/>
					<Scene
						back
						key="signup"
						title="Create Account"
						hideNavBar={true}
						component={SignupViewContainer}
					/>

					<Scene
						key="home"
						title="Home"
						icon={TabIcon}
						default="home"
						hideNavBar
						component={HomeViewContainer}
					/>
					<Scene
						key="map"
						title="Map"
						icon={TabIcon}
						hideNavBar={true}
						component={MapScreen}
					/>
					<Scene
						key="links"
						title="Links"
						icon={TabIcon}
						hideNavBar={true}
						component={LinksScreen}
					/>
					<Scene
						key="settings"
						title="Settings"
						icon={TabIcon}
						hideNavBar={true}
						component={SettingsScreen}
					/>
				</Scene>
			</Router>
		)
	}
}

const mapStateToProps = function(state) {
	const { auth } = state
	return {
		isAuthenticated: auth && auth.isAuthenticated
	}
}

export default connect(mapStateToProps)(NonoRoutes)
