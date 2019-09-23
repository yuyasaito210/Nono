import React, { Component } from 'react';
import { View } from 'react-native';
import MapSection from './map-section/MapSection';
import MapButtonsLayer from './map-buttons/MapButtonsLayer';
import UnlockBoxContainer from './unlock-box/UnlockBoxContainer';
import UnlockDialogContainer from './unlock-dialog/UnlockDialogContainer';
import SearchDialogContainer from './search-dialog/SearchDialogContainer';
import ShowNearDialogContainer from './show-near-dialog/ShowNearDialogContainer';
import ReservableListDialog from './reservable-list-dialog/ReservableListDialog';
import FilterDialog from './filter-dialog/FilterDialog';
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

  onCancelFilter = () => this.seState({pageStatus: 'openUnlockDialog'});
  
  onSeeFilter = () => {
    this.seState({pageStatus: 'openUnlockDialog'});
  };

  onCancelSearch = () => this.setState({pageStatus: 'locked'});

  onCloseSearchNearDialog = () => this.setState({pageStatus: 'locked'});

  onGoTostation = (station) => {
    console.log('===== Goto station: ', station);
  };

  onResetFilter = () => {
    this.setState({pageStatus: 'openSearchDialog'});
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
              <FilterDialog onCancel={this.onCancelFilter} onSee={this.onSeeFilter}/>
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
