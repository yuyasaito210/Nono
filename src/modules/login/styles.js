import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: colors.primary
  },
  // section: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // middle: {
  //   flex: 2,
  //   justifyContent: 'flex-start',
  //   alignSelf: 'stretch',
  // },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
  logoViewContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  title: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 25,
    fontWeight: 'bold'
  },
  nextButton: {
    alignSelf: 'stretch', 
    marginBottom: 10
  },
  descriptionText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
  },
  socialButtonCenter: {
    marginLeft: 10,
    marginRight: 10,
  },
});
  
export default styles;