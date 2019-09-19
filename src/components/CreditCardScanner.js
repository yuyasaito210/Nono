import React from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
// import { CardIOView, CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

import { fonts, colors } from '../styles';


export default class CreditCardScanner extends React.Component {
  state = {

  };

  componentDidMount() {
  }

  componentWillUnmount() {
    // if (Platform.OS === 'ios') {
    //   CardIOUtilities.preload();
    // }
  }

  onDidScanCard = (card) => {
    // the scanned card
    console.log('===== card: ', card);
  }

  scanCard = () => {
    // CardIOModule
    //   .scanCard()
    //   .then(card => {
    //     // the scanned card
    //     console.log('===== card: ', card);
    //   })
    //   .catch((e) => {
    //     // the user cancelled
    //     console.log('=== error: ', e)
    //   })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.scanCard}>
          <Text>Scan card!</Text>
        </TouchableOpacity>
      </View>
    );
    // IOS
    // return (
    //   <View style={styles.guideContainer}>
    //     <CardIOView
    //       didScanCard={this.onDidScanCard}
    //       style={{ flex: 1 }}
    //     />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  guideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  guideTopSection: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  guideImageSection: {
    // flexDirection: 'row',
    flex: 1,
    marginTop: 20,
    alignSelf: 'stretch',
    width: '100%'
  },
  guideBottomSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  guideTitle: {
    color: colors.black,
    //fontFamily: fonts.primaryRegular,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  guideDescription: {
    color: colors.black,
    textAlign: 'center',
    //fontFamily: fonts.primaryRegular,
  },
  guideNextButton: {
    alignSelf: 'stretch', 
    marginBottom: 10
  },
});