import React from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './ReservableListDialog.style';
import { Button, StationItem } from '~/components';

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
    ],
    bookCount: 1
  }

  onIncreaseBookCount = () => {
    this.setState({bookCount: this.state.bookCount + 1})
  };

  onDecreaseBookCount = () => {
    const { bookCount } = this.state;
    this.setState({bookCount: (bookCount == 1) ? bookCount : (bookCount - 1) });
  };

  render = () => {
    const { onBook, appActions } = this.props;
    const { stations, bookCount } = this.state;
    const { _t } = appActions;
    price = 1;

    return (
      <Wrapper>
        <View style={styles.desc.container}>
          <Text style={styles.desc.title}>{_t('Book your nono')}</Text>
          <Text style={styles.desc.content}>
            {`${_t('Your nono battery will be held in the station for a maximum period of 15min for a fee of ')} ${price}€`}
          </Text>
        </View>
        <View style={styles.list.container}>
          <FlatList
            data={stations}
            renderItem={({ item }) => 
              <StationItem item={item} appActions={appActions} />
            } horizontal
          />
        </View>
        <TouchableOpacity
          style={styles.actionBar.container}
          onPress={(station, bookCount) => onBook(station, bookCount)}
        >
          <View style={styles.actionBar.titleContainer}>
            <Text style={styles.actionBar.title}>{_t('Book')}</Text>
          </View>
          <View style={styles.actionBar.actContainer}>
            <TouchableOpacity
              style={styles.actionBar.actButtonContainer}
              onPress={this.onDecreaseBookCount}
            >
              <Image source={require('images/moins.png')} style={styles.actionBar.actButton}/>
            </TouchableOpacity>
            <Text style={styles.actionBar.reserveCount}>{bookCount}</Text>
            <TouchableOpacity
              style={styles.actionBar.actButtonContainer}
              onPress={this.onIncreaseBookCount}
            >
              <Image source={require('images/plus.png')} style={styles.actionBar.actButton}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Wrapper>
    )
  }
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