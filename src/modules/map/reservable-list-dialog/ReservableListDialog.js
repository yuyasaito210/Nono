import React from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './ReservableListDialog.style';
import { Button } from '~/components';

export default class ReservableListDialog extends React.Component {
  state = {
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
    const { stations } = this.state;
    return (
      <Wrapper>
        <View style={styles.desc.container}>
          <Text style={styles.desc.title}>Réserve ta nono</Text>
          <Text style={styles.desc.content}>
            Ta batterie nono sera retenue en station pendant une période maximale de 15min pour un tarif de 1€
          </Text>
        </View>
        <View style={styles.list.container}>
          <FlatList data={stations} renderItem={({ item }) => <StationItem item={item} />} horizontal/>
        </View>
        <View style={styles.actionBar.container}>
          <View style={styles.actionBar.titleContainer}>
            <Text style={styles.actionBar.title}>Réserver</Text>
          </View>
          <View style={styles.actionBar.actContainer}>
            <TouchableOpacity style={styles.actionBar.actButtonContainer}>
              <Image source={require('images/moins.png')} style={styles.actionBar.actButton}/>
            </TouchableOpacity>
            <Text style={styles.actionBar.reserveCount}>1</Text>
            <TouchableOpacity style={styles.actionBar.actButtonContainer}>
              <Image source={require('images/plus.png')} style={styles.actionBar.actButton}/>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    )
  }
}

const StationItem = ({ item }) => {
  return (
    <View style={styles.item.container}>
      <ImageBackground source={require('images/nearSearchDialogItemBg.png')} style={styles.item.containerBg} resizeMode={'stretch'}>      
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
      </ImageBackground>
    </View>    
  )
}

const Wrapper = ({ children }) => (
  <View style={styles.wrapper.container}>
    <View style={styles.wrapper.headerBar}>
      <CloseDialogButton style={styles.wrapper.closeButton}/>
    </View>    
    {children}
  </View>
)

const CloseDialogButton = ({ style  }) => (
  <TouchableOpacity>
    <Image source={require('images/cross.png')} style={style} />
  </TouchableOpacity>
)