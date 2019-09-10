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
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
  last: {
    justifyContent: 'flex-end',
  },
  textInput: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  logo: {
    height: 150,
  },
  logoImageSectionContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 150,
    justifyContent: 'space-between',
  },
  logoImageSection: {
    flex: 1,
    height: 170,
  },
  logoImageLeftSection: {
    flex: 1,
    left: -70,
    top: -70,
    height: 170,
  },
  logoImageRightSection: {
    flex: 1,
    right: -70,
    top: -70,
    height: 170,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 19,
    fontWeight: 'bold'
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