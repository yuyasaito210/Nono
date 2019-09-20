import { StyleSheet, StatusBar } from 'react-native';
import Layout from '../../../constants/Layout';
import { fonts, colors } from '../../../styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop:( Platform.OS === 'android') 
                ? StatusBar.currentHeight 
                : (Layout.isIPhoneX ? 45 : 0)
    },
    content: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '85%',
      width: '85%',
      borderWidth: 1,
      backgroundColor: colors.white,
      borderColor: '#CCC',
      borderRadius: 8,
      padding: 10,
      flexDirection: 'column',
      flex: 1,
    },
    title: {
      fontSize: 23,
      color: colors.primary,
      fontWeight: '600',
      paddingTop: 40,
      paddingBottom: 20,
      paddingLeft: 15,
      paddingRight: 10
    },
    listContainer: {
      width: '100%',
      paddingLeft: 0
    },
    listItemContainer: {
      flex: 1
    },

    listItemTitleContainer: {
      flexDirection: 'row'
    },
    listItemTitle: {
      alignItems: 'flex-start',
      fontSize: 16,
      fontWeight: '400',
      color: colors.black
    },
    listItemSubTitle: {
      alignItems: 'flex-end',
      fontSize: 13,
      fontWeight: '300'
    },

    listItemLeftImage: {
      alignSelf: 'center',
      color: colors.primary,
      backgroundColor: colors.white,
      fontSize: 24
    },
    listItemRightImage: {
      alignSelf: 'center',
      color: colors.primary,
      backgroundColor: colors.white,
      fontSize: 24
    },
    linearGradient: {
      paddingLeft: 8,
      borderRadius: 15,
      flexDirection: 'row'
    },
    linearImage: {
      alignSelf: 'center',
      color: colors.white,
      fontSize: 24,
      backgroundColor: 'transparent',
    },
    linearTitle: {
      alignItems: 'flex-end',
      color: colors.white,
      fontSize: 16,
      fontWeight: '600'
    }
  });
  
  export default styles;