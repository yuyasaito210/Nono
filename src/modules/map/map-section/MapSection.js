import React from 'react';
import { View, Image, Platform, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { mapStyles } from './MapSection.style';
import styles from '../styles';
import { Button } from 'native-base';
import { W, H, em } from '~/constants/Layout';

const defaultRegion = {
	latitude: 37.321996988,
	longitude: -122.0325472123455,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};
const defaultPlaces= [
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
];

const defaultCurrentPosition = {
	name: 'My location',
	coords: {
		latitude: 37.332096988,
		longitude: -122.0487472123455,
	}
};


export default class MapSection extends React.Component {
	state = {
		currentLocation: null,
		region: {},
    places: []
	}
	
	componentWillMount() {
		this.setState({region: defaultRegion, places: defaultPlaces, currentLocation: defaultCurrentPosition})
	}

	componentDidMount() {
		_this = this;
		Geolocation.getCurrentPosition(
			(position) => {
					console.log('====== position: ', position);
					// For test
					// this.setState({
					// 	currentLocation: {
					// 		name: 'My location',
					// 		coords: position.coords
					// 	}
					// })
			},
			(error) => {
					// See error code charts below.
					console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
	}

  componentWillReceiveProps = (nextProps) => {
    const { region, places } = nextProps;
    if (region && places) this.setState({region, places});
  };

	render() {
		const { region, } = this.state;
		const { children } = this.props;

		return (
			<View style={{position: 'relative', width: W, height: H}}>
				<MapView
					style={mapStyles.container}
					region={region}
					showsUserLocation={true}
					// mapType={Platform.OS == "android" ? "none" : "standard"}
					showsMyLocationButton={true}
					followsUserLocation={true}
					showsCompass={true}
					showsTraffic={true}
					rotateEnabled={true}
					loadingEnabled={true}
					pitchEnabled={true}
				>
					{this.renderMarkers()}
					{this.renderCurrentLocationMarker()}
					{ children && children}
				</MapView>
				{this.renderButtons()}
			</View>
		)
	}
	renderMarkers() {
		const { places } = this.state;

		return places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords}>
				<Image source={require('images/pin-open.png')} style={mapStyles.marker}/>
			</Marker>
    ))
	}
	renderCurrentLocationMarker() {
		const { currentLocation } = this.state

		return (
			<>
				{currentLocation && 
					<Marker key='my-location' coordinate={currentLocation.coords}>
						<Image source={require('images/currentLocation.png')} style={mapStyles.markerOfMine} />				
					</Marker>
				}
			</>
		)
	}

	renderButtons() {
		const { buttons, onSearch } = this.props

		return (
			<>
				{ buttons && buttons.includes('profile') && 
					<Button style={[buttonStyles.button, {left: 20, top: Platform.OS==='ios'?50:20}]}>
				 		<Image source={require('images/profile.png')}/>
			 		</Button>
				}
				{ buttons && buttons.includes('gift') && 
					<Button style={[buttonStyles.button, {right: 20, top: Platform.OS==='ios'?50:20}]}>
				 		<Image source={require('images/gift.png')}/>
			 		</Button>
				}
				{ buttons && buttons.includes('search') && 
					<Button 
						onPress = {onSearch}
						style={[buttonStyles.button, {right: 20, bottom: 200}]}
					>
				 		<Image source={require('images/search.png')}/>
			 		</Button>
				}
				{ buttons && buttons.includes('refresh') && 
					<Button style={[buttonStyles.button, {right: 20, bottom: 131, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
				 		<Image source={require('images/refresh.png')}/>
			 		</Button>
				}
				{ buttons && buttons.includes('target') && 
					<Button style={[buttonStyles.button, {right: 20, bottom: 80, borderTopLeftRadius: 0, borderTopRightRadius: 0}]}>
				 		<Image source={require('images/position.png')}/>
			 		</Button>
				}
			</>
		)
	}
}

const buttonStyles = StyleSheet.create({
	button: {
		position: 'absolute', zIndex: 10,
    width: 50, height: 50, 
    borderRadius: 25, backgroundColor: '#fff',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
	}
})
