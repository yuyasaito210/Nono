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
    position: 'absolute', left: 57, top: 240,
    width: 260, height: 260,
    borderWidth: 10, borderColor: '#3fcdf8'
  },
  svgInnerContainer: {
    backgroundColor: '#ebe0de',
    paddingTop: 10, paddingBottom: 10, paddingHorizontal: 20
  },
  svgText: {
    width: '100%', textAlign: 'center', 
    fontSize: 16
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
    width: W, height: 30,
    fontSize: 16, textAlign: 'center', color: '#fff'
  },
  smallText: {
    position: 'absolute', left: 0, top: 0, 
    width: W, height: 30,
    marginLeft: 'auto',
    fontSize: 14, textAlign: 'center', color: '#fff'
  },
  button: {
    position: 'absolute',
    borderRadius: 20,
    opacity: 0.8, backgroundColor: '#444',
    width: 50, height: 50,
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
    position: 'absolute', top: 240, left: 25,
    width: W, height: 40, 
    zIndex: 20,
    flexDirection: 'row'
  },
  formInput: {
    borderBottomWidth: 2, borderBottomColor: '#fff',
    width: 50, marginHorizontal: 2,
    fontSize: 20, lineHeight: 30,
    color: '#fff', textAlign: 'center'
  }
})

const mapStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, top: 0, zIndex: 5,
    width: W, height: H
  },
  marker: {
    width: 40, height: 40
  }
})

const rentBoxStyles = StyleSheet.create({
  text: {
    color: '#fff', fontSize: 15, textAlign: 'center',
    width: W
  },
  row: {
    marginLeft: 25,
    flexDirection: 'row'
  },
  leftCol: {
    width: 200,
    color: '#fff', fontSize: 15
  },
  rightCol: {
    width: 125,
    color: '#fff', fontSize: 15
  },
  rightColSmall: {
    marginLeft: 180,
    color: '#fff', fontSize: 10
  }
})

const feedbackDialogStyles = StyleSheet.create({
  container: {
    position: 'absolute', zIndex: 15,
    left: 25, bottom: 30,
    width: 325,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25
  },
  fancyImageContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  textContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  title: {
    fontSize: 20, fontWeight: 'bold',
    textAlign: 'center', marginVertical: 10
  },
  desc: {
    fontSize: 14, textAlign: 'center', width: 200, marginLeft: 'auto', marginRight: 'auto', lineHeight: 22
  },
  buttonContainer: {
    flex: 1, alignItems: 'center',
    marginVertical: 10
  },
  starContainer: {
    flex:1, alignItems: 'center',
    marginHorizontal: 20, marginVertical: 10
  },
  textInputContainer: {
    
  }
})

export default {
  page: pageStyles,
  scanner: scannerStyles,
  actionLayer: actionLayerStyles,
  enterCode: enterCodeStyles,
  map: mapStyles,
  rentBox: rentBoxStyles,
  feedbackDialog: feedbackDialogStyles
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