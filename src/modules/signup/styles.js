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
  keyboardScrollViewContainer: {
    flex: 1,
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
    //fontFamily: fonts.primaryRegular,
    fontSize: 25,
    fontWeight: 'bold'
  },
  nextButton: {
    alignSelf: 'stretch', 
    marginBottom: 10
  },
  descriptionText: {
    color: colors.white,
    //fontFamily: fonts.primaryRegular,
  },
  textInput: {
    color: colors.white,
    //fontFamily: fonts.primaryRegular,
    color: colors.white,
    backgroundColor: colors.textInputBackgroundColor,
    ...Platform.select({
      android: {
        paddingLeft: 5,
        opacity: 0.9,
      },
    }),
    borderWidth: 0.5,
    borderColor: colors.textInputBackgroundColor,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingLeft: 20
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
  }
});
  
export default styles;