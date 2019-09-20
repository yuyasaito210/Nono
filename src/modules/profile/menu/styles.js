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
      paddingBottom: 20
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
    listItemContainer: {
      width: '100%'
    },

    listItemTitleContainer: {
      flexDirection: 'row'
    },
    listItemTitle: {
      alignItems: 'flex-start',
      fontSize: 15,
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
  });
  
  export default styles;