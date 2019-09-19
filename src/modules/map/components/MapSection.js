import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { mapStyles } from './MapSection.style';
import styles from '../styles';

export default class MapSection extends React.Component {
	state = {
		currentLocation: null
	}
	componentDidMount() {
		// this.getCurrentPosition();
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
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ))
	}
	getCurrentPosition() {
		navigator.geolocation.watchPosition(
			position => {
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
			<Image source={require('../assets/currentLocation.png')} style={styles.MarkerOfMine} />				
		</Marker>
	)
}
