import React, { Component } from 'react';
import { View } from 'react-native';
import MapSection from './map-section/MapSection';
import MapButtonsLayer from './map-buttons/MapButtonsLayer';
import UnlockBoxContainer from './unlock-box/UnlockBoxContainer';
import UnlockDialogContainer from './unlock-dialog/UnlockDialogContainer';
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
    pageStatus: 'locked',
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

  setPageStatus = (pageStatus) => this.setState({pageStatus});

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
                search onSearch={() => this.setPageStatus('openSearchDialog')}
                refresh
                target
                bottomExtra={80}
              />
              <UnlockBoxContainer 
                onPressUnlockButton={() => this.setPageStatus('openUnlockDialog')}
              />
            </>
          }
          {pageStatus=='openUnlockDialog' && 
            <UnlockDialogContainer 
              onPressUnlockButton={() => this.setPageStatus('openShowNearDialog')}
              onClickBack={() => this.setPageStatus('locked')}
            />
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
                search onSearch={() => this.setPageStatus('openSearchDialog')}
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
                search onSearch={() => this.setPageStatus('openSearchDialog')}
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
                search onSearch={() => this.setPageStatus('openSearchDialog')}
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
}
