import { StyleSheet } from 'react-native';
import Layout, { em } from '~/constants/Layout';
import { fonts, colors } from '../../../styles';

export const styles = StyleSheet.create({
  wrapperContainer: {
    position: 'absolute',
    left: 0, top: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  wrapperBg: {
    width: Layout.window.width,
    height: Layout.window.height
  },
  topbarContainer: {
    marginTop:( Platform.OS === 'android') 
              ? StatusBar.currentHeight 
              : (Layout.isIPhoneX ? 25 : 0), 
  },
  topbarBackButton: {
    backgroundColor: 'transparent', 
    width: 40*em, height: 40*em, marginTop: 20*em,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 0
  },
  contentContainer: {
    padding: 20
  },
  contentDeputeImageContainer: {
    alignItems: 'center', justifyContent: 'center',
    marginTop: 30*em, marginBottom: 30*em
  },
  contentTitleContainer: {
  
  },
  contentTitle: {
    textAlign: 'center', fontSize: 26*em, fontWeight: 'bold',
 },
  contentSubtitle: {
    textAlign: 'center', fontSize: 17*em, 
  },
  contentDescContainer : {

  },
  contentDesc: {
    textAlign: 'center', fontSize: 15*em, 
  },
  codeContainer: {
    alignContent: "center"
  },
  codeTextContainer: {

  },
  codeShareContainer: {    
    // backgroundColor: '#07E28E',
    // borderRadius: 20*em,
    // position: 'relative',
    // flexDirection: 'row', justifyContent: 'center',
    // top: 20*em,
    flex: 1
  }, 
  codeOverText: {
    textAlign: "center",
    marginBottom: 10,
  },  
  codeShareText: {
    fontSize: 16*em, lineHeight: 50*em, color: 'white'
  },
  codeShareButton: {
    alignSelf: 'flex-end',
    // position: 'absolute', 
    // right: 10*em, top: 0,
    backgroundColor: 'transparent',
    width: 50*em, height: 50*em,
    // alignItems: 'center', justifyContent: 'center'
  },
  linearGradient: {
    paddingLeft: 8,
    paddingRight: 20,
    borderRadius: 20,
    flexDirection: 'row',
    height: 50
  },
  linearImage: {
    alignSelf: 'flex-end',
    color: colors.white,
    fontSize: 24,
    backgroundColor: 'transparent',
    tintColor: '#fff'
  },
})