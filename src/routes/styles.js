
import { StyleSheet, StatusBar } from 'react-native';
import { colors, fonts } from '../styles';

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    color: colors.white
  },
  navTitle: {
    color: colors.white,
  },
  routerScene: {
    // paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight,
  },
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
  /////////////////////////
  guidHeaderContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  guidHeaderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  guidHeaderCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.primary,
    fontSize: 25,
    fontWeight: '600',
  },
  ///////////////////////////
  setHeaderContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary
  },
  setHeaderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  setHeaderCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 25,
    fontWeight: '600',
  },
});

export default styles;