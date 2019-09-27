import React from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './StationDialog.style';
import { Button, Spacer } from '~/components';

export default class StationDialog extends React.Component {
  state = {
    stations: [
      {
        image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        title: 'Bar',
        openHour: '22:00',
        batteries: 18,
        places: 6
      }
    ],
    stateTimes: [
			{title: 'laundi',   time: '07:00 - 22: 00'},
			{title: 'mardi',    time: '07:00 - 22: 00'},
			{title: 'mercredi', time: '07:00 - 22: 00'},
			{title: 'jeudi',    time: '07:00 - 22: 00'},
			{title: 'vendredi', time: '07:00 - 22: 00'},
			{title: 'samedi',   time: '07:00 - 22: 00'},
			{title: 'dimanche', time: 'Ferme'},
    ]
  }

  render = () => {
    const { stations, stateTimes } = this.state;
    const { onCloseStation, onGoToStation, onBook, appActions } = this.props;
    const { _t } = appActions;


    return (
      <Wrapper onClose={onCloseStation}>

        <View style={styles.list.container}>
          <FlatList
            data={stations}
            renderItem={({ item }) => 
              <StationItem item={item} appActions={appActions}/>
            }
          />
        </View>

        <View style={styles.desc.row}>
          <View style={styles.desc.col1}>
            <Image source={require('images/marker.png')} style={{tintColor:'#5ed8fc'}}/>
          </View>

          <View style={styles.desc.col2}>
            <Text style={{fontSize: 16}}>
              79 Rue de Seine, 75006 Paris
            </Text>
            <Text style={{color: '#C9C9CE', fontSize: 16}}>
              200m
            </Text>
          </View>
        </View>

        <View style={styles.desc.row}>
          <View style={styles.desc.col1}>
            <Image source={require('images/hours.png')} style={{tintColor:'#5ed8fc'}}/>
          </View>
          <View style={styles.desc.col2}>
            <FlatList data={stateTimes} renderItem={({ item }) => <StationTime  item={item} />} />
          </View>
        </View>

        <View style={styles.desc.row}>
          <View style={styles.desc.col1}>
            <Image source={require('images/call.png')} style={{tintColor:'#5ed8fc'}}/>
          </View>

          <View style={styles.desc.col2}>
            <Text>05 75 43 22 11</Text>
          </View>
        </View>

        <View style={styles.desc.row}>
          <View style={styles.desc.col1}>
            <Image source={require('images/website.png')} style={{tintColor:'#5ed8fc'}}/>
          </View>

          <View style={styles.desc.col2}>
            <Text>www.supermarche.fr</Text>
          </View>
        </View>

        <View style={styles.desc.row}>
          <View style={styles.desc.col1}>
            <Image source={require('images/share.png')} style={{tintColor:'#5ed8fc'}}/>
          </View>

          <View style={styles.desc.col2}>
            <Text>Partarger</Text>
          </View>
        </View>

        <View style={styles.bottomBar.container}>
          <View style={styles.bottomBar.searchButtonContainer}>
            <Button 
              icon={require('images/go.png')} iconColor='#fff' 
              primary rounded 
              bgGradientStart='#FF52A8' bgGradientEnd='#FFDF00' 
              caption='Go 2 mn · 200m'
              onPress={(station) => onGoToStation(station)}
            />
          </View>
          <View style={styles.bottomBar.resetButtonContainer}>
            <Button 
              rounded textColor='#FF52A8'
              bgColor='transparent'
              caption='Réserver'
              onPress={(station) => onBook(station)}
            />
          </View>
        </View>

        <Spacer size={30} />
      </Wrapper>
    )
  }
}

const StationItem = ({ item }) => {
  return (
    <View style={styles.item.container}>

      <View style={styles.item.imageContainer}>
        <Image source={{uri: item.image}} style={styles.item.image} />
      </View>

      <View style={styles.item.itemDesc}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.item.title}>{item.title}</Text>
        </View>

        <View style={styles.item.desc}>
          <Text style={styles.item.itemOuvert}>Ouvert</Text>
          <Text style={{color: '#C9C9CE'}}> · Ferme à </Text>
          <Text style={{color: '#C9C9CE'}}>22:00</Text>
        </View>

        <View style={styles.item.batteriesAndPlaces}>
          <Text style={styles.item.batteries}>{item.batteries} batteries</Text>
          <Text style={styles.item.places}>{item.places} places</Text>
        </View> 

      </View>

    </View>
  )
}

const StationTime = ({ item }) => {
	return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{width: 100}}>{item.title}</Text>
      <Text>{item.time}</Text>
    </View>		
	)
}
  
const Wrapper = ({ onClose, children }) => (
  <View style={styles.wrapper.container}>
    <View style={styles.wrapper.headerBar}>
      <CloseDialogButton style={styles.wrapper.closeButton} onClose={onClose}/>
    </View>
    {children}
  </View>
)

const CloseDialogButton = ({ onClose, style }) => (
  <TouchableOpacity onPress={onClose}>
    <Image source={require('images/cross.png')} style={style} />
  </TouchableOpacity>
)