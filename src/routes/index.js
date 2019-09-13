import React, { Component } from 'react';
import {
	Text,
	View,
	StatusBar,
	Platform,
	Image
} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';

import LoginViewContainer from '../modules/login/LoginViewContainer';
import SignupViewContainer from '../modules/signup/SignupViewContainer';
import SetConfirmCodeViewContainer from '../modules/signup/SetConfirmCodeViewContainer';
import SetUserNameViewContainer from '../modules/signup/SetUserNameViewContainer';
import SetEmailViewContainer from '../modules/signup/SetEmailViewContainer';
import SetBirthdayViewContainer from '../modules/signup/SetBirthdayViewContainer';
import GuidAddPaymentViewContainer from '../modules/signup/GuidAddPaymentViewContainer';
import GuidBringBackViewContainer from '../modules/signup/GuidBringBackViewContainer';
import GuidFindStationViewContainer from '../modules/signup/GuidFindStationViewContainer';
import GuidSaveViewContainer from '../modules/signup/GuidSaveViewContainer';
import GuidScanViewContainer from '../modules/signup/GuidScanViewContainer';
import GuidSponsorViewContainer from '../modules/signup/GuidSponsorViewContainer';
import HomeViewContainer from '../modules/home/HomeViewContainer';
import MapViewContainer from '../modules/map/MapViewContainer';
import RentButteryViewContainer from '../modules/rent_buttery/RentButteryViewContainer';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';

import SignupStack from './signup';
import { colors, fonts } from '../styles';
import styles from './styles';

const iconHome = require('../../assets/images/tabbar/home.png');
const iconCalendar = require('../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../assets/images/tabbar/grids.png');
const iconPages = require('../../assets/images/tabbar/pages.png');
const iconComponents = require('../../assets/images/tabbar/components.png');
const hederBackground = require('../../assets/images/topBarBg.png');

class TabIcon extends Component {
	render() {
		focused = this.props.focused;
		iconSource = this.props.iconSource || iconComponents;
		switch (this.props.title) {
			case 'Home':
				iconSource = iconHome;
				break;
			case 'Map':
				iconSource = iconCalendar;
				break;
			case 'Rent Battery':
				iconSource = iconGrids;
				break;
			case 'Profile':
				iconSource = iconPages;
				break;
			default:
				iconSource = iconComponents;
		}
		return (
			<View style={styles.tabBarItemContainer}>
				<Image
					resizeMode="contain"
					source={iconSource}
					style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
				/>
			</View>
		)
	}
}

function Header(title) {
	const containerStyle = [
		styles.headerContainer,
		{ marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight },
	];
	return (
		<View style={containerStyle}>
			<Image style={styles.headerImage} source={hederBackground} />
			<Text style={styles.headerCaption}>{title}</Text>
		</View>
	);
}

class NonoRoutes extends Component {
	componentDidMount() {
		StatusBar.setBarStyle('light-content');
		// Actions['authorized'](); // for test
		if (this.props.isAuthenticated) {
			Actions['authorized']();
		}
	}

	componentWillMount() {
	}

	render() {
		return (
			<Router>
			{/* <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}> */}
				<Stack key='root' hideNavBar>
					{SignupStack}

					<Scene
						key='login'
						component={LoginViewContainer}
						analyticsDesc='Login'
						hideNavBar
					/>

					<Stack
						key={'authorized'}
						tabs={true}
						tabBarIcon={TabIcon}
					>
						{/* <Drawer
							key={ 'drawer' }
							drawerWidth={ (170 * 0.8) }
							hideNavBar
						> */}
							<Stack
								key={'map'}
								tabBarLabel="Map"
								iconSource={iconCalendar}
								hideNavBar
								default
							>
								<Scene
									key='_map'
									title='Map'
									component={MapViewContainer}
								/>
							</Stack>
							<Stack
								key={'rent_battery'}
								tabBarLabel="Rent Battery"
								iconSource={iconGrids}
								header={Header('Rent Battery')}
							>
								<Scene
									key='_rent_battery'
									title='Rent Battery'
									component={RentButteryViewContainer}
								/>
							</Stack>
							<Stack
								key={'profile'}
								tabBarLabel="Profile"
								iconSource={iconPages}
								header={Header('Profile')}
							>
								<Scene
									key='_profile'
									title='Profile'
									component={ProfileViewContainer}
								/>
							</Stack>
						{/* </Drawer> */}
					</Stack>

				</Stack>
			</Router>
		)
	}
}

const mapStateToProps = function(state) {
	const { login } = state
	return {
		isAuthenticated: login && login.isAuthenticated
	}
}

export default connect(mapStateToProps)(NonoRoutes)
