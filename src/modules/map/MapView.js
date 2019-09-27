import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapSectionContainer from './map-section/MapSectionContainer';
import MapButtonsLayer from './map-buttons/MapButtonsLayer';
import UnlockBoxContainer from './unlock-box/UnlockBoxContainer';
import UnlockDialogContainer from './unlock-dialog/UnlockDialogContainer';
import SearchDialogContainer from './search-dialog/SearchDialogContainer';
import ShowNearDialogContainer from './show-near-dialog/ShowNearDialogContainer';
import ReservableListDialogContainer from './reservable-list-dialog/ReservableListDialogContainer';
import FilterDialogContainer from './filter-dialog/FilterDialogContainer';
import FinishDialogContainer from './finish-dialog/FinishDialogContainer';
import StationDialogContainer from './station-dialog/StationDialogContainer';

import styles from './styles';


// openShowNearDialog
export default class MapScreen extends Component {
  state = {
    pageStatus: 'locked',
  };

  componentWillReceiveProps = (nextProps) => {
  };

  setPageStatus = (pageStatus) => this.setState({pageStatus});

  // Callbacks for locked
  onGoToSearch = () => this.setPageStatus('openSearchDialog');

  // Callbacks for UnlockBoxContainer
  onGoToUnlock = () => this.setPageStatus('openUnlockDialog');
  
  // Callbacks for UnlockDialogContainer
  onUnlock = () => this.setPageStatus('locked'); //'openShowNearDialog'
  onGoToBack = () => this.setPageStatus('locked');

  // Callbacks for FilterDialogContainer
  onCancelFilter = () => this.setState({pageStatus: 'openUnlockDialog'});
  
  onSeeFilter = () => {
    this.setState({pageStatus: 'openStationDialog'});
  };

  // Callbacks for SearchDialogContainer
  onCancelSearch = () => this.setState({pageStatus: 'locked'});
  onSelectStation = (station) => {
    this.setState({pageStatus: 'openShowNearDialog'});
  };

  // Callbacks for ShowNearDialogContainer
  onCloseSearchNearDialog = () => this.setState({pageStatus: 'locked'});
  
  onGoTostation = (station) => {
    console.log('===== Goto station: ', station);
  };

  onResetFilter = () => {
    this.setState({pageStatus: 'openSearchDialog'});
  };

  onGotoBook = (station) => {
    this.setState({pageStatus: 'openReservableListDialog'});
  };

  // Callbacks for ReservableListDialogContainer
  onBookWithCounter = (station, bookCount) => {
    this.setState({pageStatus: 'openFilterDialog'});
  };

  // Callbacks for StationDialogContainer
  onCloseStation = () => this.setState({pageStatus: 'openReservableListDialog'});

  onGoToStation = (station) => {
    this.setState({pageStatus: 'openFinishDialog'});
  };

  onBook = (station) => {
    this.setState({pageStatus: 'openFinishDialog'});
  }

  // Callbacks for FinishDialog
  onLeaveStation = (station) => {
    Actions['rent_buttery']();
    // this.setState({pageStatus: 'locked'});
  } 

  render = () => {
    const { pageStatus, region, places } = this.state
    return (
      <>
        <View style={styles.container}>
          {pageStatus!='openUnlockDialog' &&
            <MapSectionContainer />
          }
          {pageStatus=='locked' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                search onSearch={this.onGoToSearch}
                refresh
                target
                bottomExtra={80}
              />
              <UnlockBoxContainer 
                onPressUnlockButton={this.onGoToUnlock}
              />
            </>
          }
          {pageStatus=='openUnlockDialog' && 
            <UnlockDialogContainer 
              onPressUnlockButton={this.onUnlock}
              onClickBack={this.onGoToBack}
            />
          }
          {pageStatus=='openSearchDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                bottomExtra={80}
              />
              <SearchDialogContainer
                onCancel={this.onCancelSearch}
                onSelectStation={this.onSelectStation}
              />
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
              <ShowNearDialogContainer
                onGoToStation={(station) => this.onGoTostation(station)}
                onGotoBook={(station) => this.onGotoBook(station)}
                onClose={this.onCloseSearchNearDialog}
                onResetFilter={this.onResetFilter}
              />
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
              <ReservableListDialogContainer onBook={this.onBookWithCounter}/>
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
              <FilterDialogContainer onCancel={this.onCancelFilter} onSee={this.onSeeFilter}/>
            </>            
          }
          {pageStatus=='openStationDialog' && 
            <>
              <MapButtonsLayer 
                profile
                gift
                bottomExtra={80}
              />
              <StationDialogContainer
                onCloseStation={this.onCloseStation}
                onGoToStation={this.onGoToStation}
                onBook={this.onBook}
              />
            </>            
          }
          {pageStatus=='openFinishDialog' && 
            <FinishDialogContainer onLeaveStation={this.onLeaveStation} />
          }
        </View>
      </>
    )
  };
}
