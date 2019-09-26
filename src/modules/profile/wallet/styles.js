import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import replacePathSepForGlob from 'jest-util/build/replacePathSepForGlob';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    tintColor: colors.white,
    marginLeft: 15,
    marginBottom: 22
	},
  pageWrapper: {
    // position: 'relative', zIndex: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flex: 1,
    // width: W, height: H
  },
  pageTitleContainer: {
    flexDirection: 'row',
    marginTop: 20, marginBottom: 20,
  },
  pageTitle: {
    flex: 3,
    fontSize: 24, fontWeight: 'bold', color: '#36384a'
  },
  pageOptionContainer: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    borderRadius: 20, padding: 20,
    position: 'relative',
    overflow: 'hidden'
  },
  boxBg: {
    position: 'absolute', top: 0, right: 0,
  },
  box1Title: {
    fontSize: 36, color: 'white', fontWeight: 'bold'
  },
  box1Subtitle: {
    fontSize: 16, color: 'white', marginVertical: 10
  },
  box1Text: {
    fontSize: 14 , color: 'white', width: 200
  },
  bottomBoxOveride: {
    position: 'absolute', zIndex: 10,
    left: 0, top: 0, width: W, height: H,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  bottomBox: {
    zIndex: 10, position: 'absolute',
    left: 0, bottom: 50, // For bottom bar
    width: W,
    backgroundColor: 'white', overflow: 'hidden',
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    paddingTop: 7, paddingBottom: 20, paddingHorizontal: 15
  },
  bottomRow: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

export default styles;