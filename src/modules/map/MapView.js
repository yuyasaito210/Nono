import React, { Component } from 'react';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

import styles from './styles';

export default class MapScreen extends Component {
  state = {
    region: {
      latitude: 37.321996988,
      longitude: -122.0325472123455,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    places: [
      {
        name: 'Place 1',
        coords: {
          latitude: 37.351996988,
          longitude: -122.0425472123455,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      },
      {
        name: 'Place 2',
        coords: {
          latitude: 37.301996988,
          longitude: -122.0525472123455,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      },
    ],
    
  };

  componentWillReceiveProps = (nextProps) => {
    const { region, places } = nextProps;
    if (region && places) this.setState({region, places});
  };

  renderMarkers() {
    return this.state.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ))
  };

  render = () => {
    const { region } = this.state
    return (
      <MapView
        style={styles.container}
        provider={this.props.provider}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    )
  };
}

MapScreen.propTypes = {
  provider: ProviderPropType,
};