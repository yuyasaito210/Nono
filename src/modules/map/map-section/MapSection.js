import React from 'react';
import { Image, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { mapStyles } from './MapSection.style';
import styles from '../styles';

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
		const { currentLocation, region, } = this.state;
		const { children } = this.props;

		return (
			<>
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
					{currentLocation && <MarkerOfMine currentLocation={currentLocation} />}
					{ children && children}
				</MapView>
			</>
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
}

const MarkerOfMine = ({currentLocation}) => {
	return (
		<Marker key='my-location' coordinate={currentLocation.coords}>
			<Image source={require('images/currentLocation.png')} style={mapStyles.markerOfMine} />				
		</Marker>
	)
}
