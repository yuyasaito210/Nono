import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../styles';
import Layout, { em } from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: Layout.window.width, height: Layout.window.height
  }
})
/*
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
      fontFamily: fonts.primaryRegular,
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
*/
  
export default styles;