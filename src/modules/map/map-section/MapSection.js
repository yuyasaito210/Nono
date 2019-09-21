import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { mapStyles } from './MapSection.style';
import styles from '../styles';

export default class MapSection extends React.Component {
	state = {
		currentLocation: null
	}
	componentDidMount() {
		this.getCurrentPosition();
	}
	render() {
		const { region } = this.props;
		const { currentLocation } = this.state;
		
		return (
			<>
				<MapView
					style={mapStyles.container}
					region={region}
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
		const { places } = this.props
		return places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords}>
				<Image source={require('images/pin-open.png')} style={mapStyles.marker}/>
			</Marker>
    ))
	}
	getCurrentPosition() {
		return
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
