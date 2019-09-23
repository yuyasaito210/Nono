import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import styles from './ShowNearDialog.style';
import { Button, StationItem } from '~/components';

export default class ShowNearDialog extends React.Component {
  state = {
    searchLimit: 'Rayon de 1Km',
    stations: [
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        title: 'Bar',
        openHour: '22:00',
        batteries: 18,
        places: 6
      },
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
        title: 'Bar2',
        openHour: '22:00',
        batteries: 18,
        places: 6
      },
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        title: 'Bar3',
        openHour: '22:00',
        batteries: 18, 
        places: 6
      }
    ]
  }

  render = () => {
    const { appActions, onGoToStation, onGotoBook, onResetFilter, onClose} = this.props;
    const { searchLimit, stations } = this.state;
    
    return (
      <>
        <FilterWrapper appActions={appActions} onResetFilter={onResetFilter}>
          <ShowNearWrapper onClose={onClose}>
            <View style={styles.headerBar.container}>
              <View style={styles.headerBar.topSection}>
                <Text style={styles.headerBar.searchLimit}>{searchLimit}</Text>
                <CloseDialogButton style={styles.headerBar.closeButton} onPress={onClose}/>
              </View>
              <Text style={styles.headerBar.stations}>
                {`${stations.length} ${appActions._t('stations')}`}
              </Text>
            </View>
            <View style={styles.list.container}>
              <FlatList
                data={stations}
                renderItem={({ item }) => 
                  <StationItem item={item} appActions={appActions}/>
                }
                horizontal
              />
            </View>
            <View style={styles.bottomBar.container}>
              <View style={styles.bottomBar.searchButtonContainer}>
                <Button 
                  icon={require('images/go.png')}
                  iconColor='#fff' 
                  primary rounded 
                  bgGradientStart='#FF52A8'
                  bgGradientEnd='#FFDF00' 
                  caption='Go 2 mn · 200m' 
                  onPress={() => onGoToStation(null)}
                />
              </View>
              <View style={styles.bottomBar.resetButtonContainer}>
                <Button 
                  rounded textColor='#FF52A8' 
                  bgColor='transparent'    
                  caption={appActions._t('Book')}
                  onPress={() => onGotoBook(null)}
                />
              </View>
            </View>
          </ShowNearWrapper>
        </FilterWrapper>
      </>
    )
  }
}

const FilterWrapper = ({appActions, onResetFilter, children}) => {
  return (
    <View style={styles.filterWrapper.container}>
      <View style={styles.filterWrapper.headerBar}>
        <View style={styles.filterWrapper.filterContainer}>
          <Image source={require('images/filter.png')} style={styles.filterWrapper.filterImage} />
          <Text style={styles.filterWrapper.filterText}>{appActions._t('Filters')}</Text>
        </View>
        <View style={styles.filterWrapper.resetFilterButtonContainer}>
          <ResetFilterButton 
            appActions={appActions}
            onResetFilter={onResetFilter}
            style={styles.filterWrapper.resetFilterButton}
          />
        </View>
      </View>
      {children}
    </View>
  )
}

const ResetFilterButton = ({appActions, onResetFilter, style}) => (
  <TouchableOpacity onPress={onResetFilter}>
    <Text style={style}>{appActions._t('Clear')}</Text>
  </TouchableOpacity>
)

const ShowNearWrapper = ({onClose, children}) => {
  return (
    <View style={styles.showNearWrapper.container}>
      <View style={styles.showNearWrapper.bgImageContainer}>
        <Image source={require('images/slide.png')} style={styles.showNearWrapper.bgImage}/>        
      </View>      
      {children}
    </View>
  )
}

const CloseDialogButton = ({onPress, style}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={require('images/cross.png')} style={style} />
  </TouchableOpacity>
)