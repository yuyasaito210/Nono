import React, { Component } from 'react';
import { View } from 'react-native';
import MapSection from './components/MapSection';
import MapButtonsLayer from './components/MapButtonsLayer';
import UnlockBox from './components/UnlockBox';
import LockDialog from './components/LockDialog';
import SearchDialog from './components/SearchDialog';
import ShowNearDialog from './components/ShowNearDialog';

import styles from './styles';


// openShowNearDialog
export default class MapScreen extends Component {
  state = {
    pageStatus: 'openShowNearDialog',
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
        }
      },
      {
        name: 'Place 2',
        coords: {
          latitude: 37.301996988,
          longitude: -122.0525472123455,
        }
      },
    ],

  };

  componentWillReceiveProps = (nextProps) => {
    const { region, places } = nextProps;
    if (region && places) this.setState({region, places});
  };

  render = () => {
    const { pageStatus, region, places } = this.state
    return (
      <>
        <View style={styles.container}>
          <MapSection region={region} places={places} />
          {pageStatus=='locked' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                search
                refresh
                target
              />
              <UnlockBox onUnlock={this.openLockDialog} />
            </>
          }
          {pageStatus=='openLockDialog' && 
            <LockDialog />
          }
          {pageStatus=='openSearchDialog' && 
            <SearchDialog />
          }
          {pageStatus=='openShowNearDialog' && 
            <ShowNearDialog />
          }
        </View>
      </>
    )
  };

  openLockDialog = () => {
    this.setState({
      ...this.state,
      pageStatus: 'openLockDialog'
    })
  }
}
