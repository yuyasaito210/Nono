
import { StyleSheet, StatusBar } from 'react-native';
import { colors, fonts } from '../../styles';

HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  common: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  commonLeftSection: {
    flex: 1
  },
  commonBodySection: {
    flex: 3, 
    alignItems: 'center'
  },
  commonRightSection: {
    flex: 1
  },
  /////////////////////////
  guideHeaderContainer: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.white
  },
  guideHeaderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: HEADER_HEIGHT,
  },
  guideHeaderLeft: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '600',
  },
  guideHeaderCaption: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '600',
  },
  guideHeaderRight: {
    color: colors.lightGray,
    fontSize: 25,
    fontWeight: '100',
  },
  ///////////////////////////
  setHeaderContainer: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primary,
    padding: 0
  },
  setHeaderImage: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: HEADER_HEIGHT,
  },
  setHeaderCaption: {
    //fontFamily: fonts.primaryRegular,
    alignItems: 'center',
    color: colors.white,
    fontSize: 25,
    fontWeight: '600',
  },
});

export default styles;