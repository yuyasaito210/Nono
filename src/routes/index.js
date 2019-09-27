import React, { Component } from 'react';
import { Text, View, StatusBar, Platform, Image } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';

import LoginViewContainer from '../modules/login/LoginViewContainer';
import HomeViewContainer from '../modules/home/HomeViewContainer';
import MapViewContainer from '../modules/map/MapViewContainer';
import RentButteryViewContainer from '../modules/rent_buttery/RentButteryViewContainer';
import ProfileViewContainer from '../modules/profile/ProfileViewContainer';

import SignupStack from './signup';
import { GeneralHeader } from './header/header';
import { colors, fonts } from '../styles';
import styles from './styles';

const iconHome = require('../assets/images/tabbar/home.png');
const iconCalendar = require('../assets/images/tabbar/calendar.png');
const iconGrids = require('../assets/images/tabbar/grids.png');
const iconPages = require('../assets/images/tabbar/pages.png');
const iconComponents = require('../assets/images/tabbar/components.png');

import ProfileStack from './profile';
import RentButteryStack from './rentbuttery';

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

class NonoRoutes extends Component {
	componentDidMount() {
		// StatusBar.setBarStyle('light-content');
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
								header={GeneralHeader('Map')}
								hideNavBar								
							>
								<Scene
									key='_map'
									title='Map'
									component={MapViewContainer}
								/>
							</Stack>
							{RentButteryStack}
							{ProfileStack}
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
