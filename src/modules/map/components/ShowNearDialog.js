import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './ShowNearDialog.style'

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
    const { searchLimit, stations } = this.state
    return (
      <>
        <FilterWrapper>
          <ShowNearWrapper>
            <View style={styles.headerBar.container}>
              <Text style={styles.headerBar.searchLimit}>{searchLimit}</Text>
              <Text style={styles.headerBar.stations}>{stations.length} stations</Text>
            </View>
            <View style={styles.list.container}>
              <FlatList data={stations} renderItem={({ item }) => <StationItem item={item} />} horizontal/>
            </View>
            <View style={styles.bottomBar.container}>

            </View>
          </ShowNearWrapper>
        </FilterWrapper>
      </>
    )
  }
}

const StationItem = ({ item }) => {
  return (
    <View style={styles.item.container}>
      <View style={styles.item.imageContainer}>
        <Image source={{uri: item.image}} style={styles.item.image} />
      </View>
      <View>
        <Text style={styles.item.title}>{item.title}</Text>
        <Text style={styles.item.openHour1}>Ouvert</Text>
        <Text style={styles.item.openHour2}> · Ferme à {item.openHour}</Text>
        <View style={styles.item.batteriesAndPlaces}>
          <Text style={styles.item.batteries}>{item.batteries} batteries</Text>
          <Text style={styles.item.places}>{item.places} places</Text>
        </View>
      </View>
    </View>    
  )
}

const FilterWrapper = ({ children }) => {
  return (
    <View style={styles.filterWrapper.container}>
      <View style={styles.filterWrapper.headerBar}>
        <View style={styles.filterWrapper.filterContainer}>
          <Image source={require('../assets/filter.png')} style={styles.filterWrapper.filterImage} />
          <Text style={styles.filterWrapper.filterText}>Filtres</Text>
        </View>
        <View style={styles.filterWrapper.resetFilterButtonContainer}>
          <ResetFilterButton style={styles.filterWrapper.resetFilterButton}/>
        </View>
      </View>
      {children}
    </View>
  )
}

const ResetFilterButton = ({style}) => (
  <TouchableOpacity>
    <Text style={style}>Effacer</Text>
  </TouchableOpacity>
)

const ShowNearWrapper = ({ children }) => {
  return (
    <View style={styles.showNearWrapper.container}>
      <View style={styles.showNearWrapper.bgImageContainer}>
        <Image source={require('../assets/slide.png')} style={styles.showNearWrapper.bgImage}/>        
      </View>
      <CloseDialogButton style={styles.showNearWrapper.closeButton}/>
      {children}
    </View>
  )
}

const CloseDialogButton = ({ style  }) => (
  <TouchableOpacity>
    <Image source={require('../assets/cross.png')} style={style} />
  </TouchableOpacity>
)