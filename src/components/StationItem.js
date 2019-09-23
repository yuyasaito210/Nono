import React, { Children } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native';


export default class StationItem extends React.Component {
  render() {
    const { item, appActions } = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('images/nearSearchDialogItemBg.png')}
          style={styles.containerBg}
          resizeMode={'stretch'}
        >      
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <View style={styles.itemDesc}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>{item.title}</Text>
              
              <TouchableOpacity style={{left: 170}}>
                <Image source={require('images/options.png')} />
              </TouchableOpacity>
            </View>
  
            <View style={styles.desc}>
              <Text style={styles.itemOuvert}>{appActions._t('Ouvert')}</Text>
              <Text style={{color: '#C9C9CE'}}>
                {`· ${appActions._t('Ferme')} ${appActions._t('à')}`}
              </Text>
              <Text style={{color: '#C9C9CE'}}>22:00</Text>
            </View>
  
            <View style={styles.batteriesAndPlaces}>
              <Text style={styles.batteries}>
                {item.batteries} {appActions._t('batteries')}
              </Text>
              <Text style={styles.places}>
                {item.places} {appActions._t('places')}
              </Text>
            </View> 
  
          </View>
        </ImageBackground>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288, height: 120,
    marginLeft: 20, marginTop: 15, marginBottom: 15,
    flexDirection: 'row'
  },
  containerBg: {
    width: 288, height: 100,
    flexDirection: 'row'
  },
  imageContainer: {
    overflow: 'hidden'
  },
  image: {
    width: 40, height: 40,
    borderRadius: 15, borderWidth: 1
  },

  itemDesc: {
    left: 10,  fontSize: 16, 
  },

  title: {
    fontSize: 16, fontWeight: "bold"
  },
  
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5,
  },

  itemOuvert: {
    color: '#07E28E', fontSize: 12,
  },

  batteriesAndPlaces: {
    top: 10, left: -15,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  batteries: {
    color: '#35CDFA'
  },
  places: {
    color: '#35CDFA', left: 25,
  }
});
