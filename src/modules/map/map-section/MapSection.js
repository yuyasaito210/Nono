import React from 'react';
import { Image, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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

export default class MapSection extends React.Component {
	state = {
		currentLocation: null,
		region: {},
    places: []
	}
	
	componentWillMount() {
		this.setState({region: defaultRegion, places: defaultPlaces})
	}

	componentDidMount() {
		this.getCurrentPosition();
	}

  componentWillReceiveProps = (nextProps) => {
    const { region, places } = nextProps;
    if (region && places) this.setState({region, places});
  };

	render() {
		const { currentLocation, region, places } = this.state;

		return (
			<>
				<MapView
					style={mapStyles.container}
					region={region}
					// mapType={Platform.OS == "android" ? "none" : "standard"}
				>
					{this.renderMarkers()}
					{
						currentLocation && <MarkerOfMine currentLocation={currentLocation} />
					}
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
	getCurrentPosition() {
		console.log(navigator.geolocation);
		return;
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position)
			}
		)
		return
		navigator.geolocation.watchPosition(
      (position) => {
				return
				this.setState({
					...this.state,
					currentLocation: position.coords
				})				
			}
		)
	}
}

const MarkerOfMine = ({currentLocation}) => {
	return (
		<Marker coordinate={currentLocation}>
			<Image source={require('images/currentLocation.png')} style={mapStyles.markerOfMine} />				
		</Marker>
	)
}
