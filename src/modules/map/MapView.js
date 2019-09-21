import React, { Component } from 'react';
import { View } from 'react-native';
import MapSection from './map-section/MapSection';
import MapButtonsLayer from './map-buttons/MapButtonsLayer';
import UnlockBox from './unlock-box/UnlockBox';
import UnlockDialog from './unlock-dialog/UnlockDialog';
import SearchDialog from './search-dialog/SearchDialog';
import ShowNearDialog from './show-near-dialog/ShowNearDialog';
import ReservableListDialog from './reservable-list-dialog/ReservableListDialog';
import FilterDialog from './filter-dialog/FilterDialog';
import FinishDialog from './finish-dialog/FinishDialog';
import StationDialog from './station-dialog/StationDialog';

import styles from './styles';


// openShowNearDialog
export default class MapScreen extends Component {
  state = {
    pageStatus: 'openStationDialog',
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
      }
    ]
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
          {pageStatus!='openUnlockDialog' &&
            <MapSection region={region} places={places} />
          }          
          {pageStatus=='locked' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                search onSearch={this.openSearchDialog.bind(this)}
                refresh
                target
                bottomExtra={80}
              />
              <UnlockBox onPressUnlockButton={this.openUnlockDialog.bind(this)} />
            </>
          }
          {pageStatus=='openUnlockDialog' && 
            <UnlockDialog onPressUnlockButton={this.openShowNearDialog.bind(this)}/>
          }
          {pageStatus=='openSearchDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                bottomExtra={80}
              />
              <SearchDialog />
            </>            
          }
          {pageStatus=='openShowNearDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                search onSearch={this.openSearchDialog.bind(this)}
                refresh
                target
                bottomExtra={320}
              />
              <ShowNearDialog />
            </>            
          }
          {pageStatus=='openReservableListDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                search onSearch={this.openSearchDialog.bind(this)}
                refresh
                target
                bottomExtra={320}
              />
              <ReservableListDialog />
            </>
          }
          {pageStatus=='openFilterDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                search onSearch={this.openSearchDialog.bind(this)}
                refresh
                target
                bottomExtra={320}
              />
              <FilterDialog />
            </>            
          }
          {pageStatus=='openStationDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                bottomExtra={80}
              />
              <StationDialog />
            </>            
          }
          {pageStatus=='openFinishDialog' && 
            <FinishDialog />
          }
        </View>
      </>
    )
  };

  openUnlockDialog = () => {
    this.setState({
      ...this.state,
      pageStatus: 'openUnlockDialog'
    })
  }
  openSearchDialog = () => {
    this.setState({
      ...this.state,
      pageStatus: 'openSearchDialog'
    })
  }
  openShowNearDialog = () => {
    this.setState({
      ...this.state,
      pageStatus: 'openShowNearDialog'
    })
  }
}
