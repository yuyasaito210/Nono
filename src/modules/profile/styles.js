import { StyleSheet, StatusBar } from 'react-native';
import Layout from '../../constants/Layout';
import { fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
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
    profileMenuContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop:( Platform.OS === 'android') 
                ? StatusBar.currentHeight 
                : (Layout.isIPhoneX ? 45 : 0)
    },
    profileMenuContent: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '85%',
      width: '85%',
      borderWidth: 1,
      backgroundColor: colors.white,
      borderColor: '#CCC',
      borderRadius: 8,
      padding: 10
    },
    profileMenuTitle: {
      fontSize: 23,
      color: colors.primary,
      
    }
  });
  
  export default styles;