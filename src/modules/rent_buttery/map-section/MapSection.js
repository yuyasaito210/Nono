import React from 'react';
import MapView from 'react-native-maps';
import styles from '../styles';
import { Image } from 'react-native';

export default class MapSection extends React.Component {
  state = {
		currentLocation: null
  }
  
	componentDidMount() {
		this.getCurrentPosition();
  }
  
  render = () => {
    const { region, places } = this.props
    const { currentLocation } = this.state
    return (
      <>
        <MapView 
          style={styles.map.container}
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

  renderMarkers = () => {
		const { places } = this.props
		return places.map((place, i) => (
      <MapView.Marker key={i} title={place.name} coordinate={place.coords}>
				<Image source={require('images/pin-open.png')} style={styles.map.marker}/>
			</MapView.Marker>
    ))
  }
  
  getCurrentPosition = () => {
  }
}

const MarkerOfMine = ({currentLocation}) => {
	return (
		<MapView.Marker coordinate={currentLocation}>
			<Image source={require('images/currentLocation.png')} style={mapStyles.markerOfMine} />				
		</MapView.Marker>
	)
}