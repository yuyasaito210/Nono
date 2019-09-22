import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../styles';
import { W, H, em } from '~/constants/Layout';

const pageStyles = StyleSheet.create({
  container: {
    position: 'relative'
  }
})

const scannerStyles = StyleSheet.create({
  container: {
    position: 'absolute', zIndex: 5,
    left: 0, top: 0,
    width: W, height: H,
    opacity: 0.8
  },
  camera: {
    width: W, height: H
  },
  svgContainer: {
    position: 'absolute', left: 57*em, top: 240*em,
    width: 260*em, height: 260*em,
    borderWidth: 10*em, borderColor: '#3fcdf8'
  },
  svgInnerContainer: {
    backgroundColor: '#ebe0de',
    paddingTop: 10*em, paddingBottom: 10*em, paddingHorizontal: 20*em
  },
  svgText: {
    width: '100%', textAlign: 'center', 
    fontSize: 16*em
  }
})

const actionLayerStyles = StyleSheet.create({
  container: {
    position: 'absolute', zIndex: 15,
    left: 0, top: 0,
    width: W, height: H
  },
  text: {
    position: 'absolute', left: 0, top: 0, 
    width: W, height: 30*em,
    fontSize: 16*em, textAlign: 'center', color: '#fff'
  },
  smallText: {
    position: 'absolute', left: 0, top: 0, 
    width: W, height: 30*em,
    marginLeft: 'auto',
    fontSize: 14*em, textAlign: 'center', color: '#fff'
  },
  button: {
    position: 'absolute',
    borderRadius: 20*em,
    opacity: 0.8, backgroundColor: '#444',
    width: 50*em, height: 50*em,
    textAlign: 'center', alignItems: 'center', justifyContent: 'center'
  },
  buttonImage: {
    tintColor: '#fff'
  },
  buttonText: {
    color: '#fff'
  }
})

const enterCodeStyles = StyleSheet.create({
  pageWrapper: {
    backgroundColor: '#59d8fd',
    width: W, height: H
  },
  button: {
    backgroundColor: '#8de2fb'
  },
  formWrapper: {
    position: 'absolute', top: 240*em, left: 25*em,
    width: W, height: 40*em, 
    zIndex: 20,
    flexDirection: 'row'
  },
  formInput: {
    borderBottomWidth: 2, borderBottomColor: '#fff',
    width: 50*em, marginHorizontal: 2*em,
    fontSize: 20*em, lineHeight: 30*em,
    color: '#fff', textAlign: 'center'
  }
})

const mapStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, top: 0, zIndex: 5,
    width: W, height: H
  },
  marker: {
    width: 40*em, height: 40*em
  }
})

const rentBoxStyles = StyleSheet.create({
  text: {
    color: '#fff', fontSize: 20*em, textAlign: 'center',
    width: W
  },
  row: {
    marginLeft: 25*em,
    flexDirection: 'row'
  },
  leftCol: {
    width: 200*em,
    color: '#fff', fontSize: 18*em
  },
  rightCol: {
    width: 125*em,
    color: '#fff', fontSize: 18*em
  },
  rightColSmall: {
    marginLeft: 180*em,
    color: '#fff', fontSize: 12*em
  }
})

export default {
  page: pageStyles,
  scanner: scannerStyles,
  actionLayer: actionLayerStyles,
  enterCode: enterCodeStyles,
  map: mapStyles,
  rentBox: rentBoxStyles
}













/*
const styles = StyleSheet.create({
    container: {
      flexGrow: 1
    },
    spinner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'space-around',
    // },
    bgImage: {
      flex: 1,
      marginHorizontal: -20,
    },
    section: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionLarge: {
      flex: 2,
      justifyContent: 'space-around',
    },
    sectionHeader: {
      marginBottom: 8,
    },
    priceContainer: {
      alignItems: 'center',
    },
    description: {
      padding: 15,
      lineHeight: 25,
    },
    titleDescription: {
      color: colors.introText,
      textAlign: 'center',
      //fontFamily: fonts.primaryRegular,
      fontSize: 15,
    },
    title: {
      marginTop: 30,
    },
    price: {
      marginBottom: 5,
    },
    priceLink: {
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
  });
  
  export default styles;
  */