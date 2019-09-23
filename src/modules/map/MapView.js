import React, { Component } from 'react';
import { View } from 'react-native';
import MapSection from './map-section/MapSection';
import MapButtonsLayer from './map-buttons/MapButtonsLayer';
import UnlockBoxContainer from './unlock-box/UnlockBoxContainer';
import UnlockDialogContainer from './unlock-dialog/UnlockDialogContainer';
import SearchDialogContainer from './search-dialog/SearchDialogContainer';
import ShowNearDialogContainer from './show-near-dialog/ShowNearDialogContainer';
import ReservableListDialogContainer from './reservable-list-dialog/ReservableListDialogContainer';
import FilterDialogContainer from './filter-dialog/FilterDialogContainer';
import FinishDialog from './finish-dialog/FinishDialog';
import StationDialog from './station-dialog/StationDialog';

import styles from './styles';


// openShowNearDialog
export default class MapScreen extends Component {
  state = {
    pageStatus: 'locked',
  };

  componentWillReceiveProps = (nextProps) => {
  };

  setPageStatus = (pageStatus) => this.setState({pageStatus});

  onCancelFilter = () => this.setState({pageStatus: 'openUnlockDialog'});
  
  onSeeFilter = () => {
    this.setState({pageStatus: 'openStationDialog'});
  };

  onCancelSearch = () => this.setState({pageStatus: 'locked'});

  onCloseSearchNearDialog = () => this.setState({pageStatus: 'locked'});

  onGoTostation = (station) => {
    console.log('===== Goto station: ', station);
  };

  onResetFilter = () => {
    this.setState({pageStatus: 'openSearchDialog'});
  };

  onGotoBook = (station) => {
    this.setState({pageStatus: 'openReservableListDialog'});
  }

  onBook = (station, bookCount) => {
    this.setState({pageStatus: 'openFilterDialog'});
  }

  render = () => {
    const { pageStatus, region, places } = this.state
    return (
      <>
        <View style={styles.container}>
          {pageStatus!='openUnlockDialog' &&
            <MapSection />
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
              <SearchDialogContainer onCancel={this.onCancelSearch} />
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
              <ReservableListDialogContainer onBook={this.onBook}/>
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
