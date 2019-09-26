import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';
import replacePathSepForGlob from 'jest-util/build/replacePathSepForGlob';

const styles = StyleSheet.create({
  backButton: {
		tintColor: '#35CDFA'
	},
  pageWrapper: {
    position: 'relative', zIndex: 5,
    paddingTop: 50*em, paddingHorizontal: 15*em,
    backgroundColor: '#fff',
    width: W, height: H
  },
  pageTitle: {
    marginTop: 10*em, marginBottom: 20*em,
    fontSize: 24*em, fontWeight: 'bold', color: '#36384a'
  },
  pageOptionContainer: {
    position: 'absolute',
    right: 20*em, top: 80*em
  },
  boxContainer: {
    borderRadius: 20*em, padding: 20*em,
    position: 'relative',
    overflow: 'hidden'
  },
  boxBg: {
    position: 'absolute', top: 0, right: 0,
  },
  box1Title: {
    fontSize: 36*em, color: 'white', fontWeight: 'bold'
  },
  box1Subtitle: {
    fontSize: 16*em, color: 'white', marginVertical: 10*em
  },
  box1Text: {
    fontSize: 14*em , color: 'white', width: 200*em
  },
  bottomBoxOveride: {
    position: 'absolute', zIndex: 10,
    left: 0, top: 0, width: W, height: H,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  bottomBox: {
    zIndex: 10, position: 'absolute',
    left: 0, bottom: 0, width: W,
    backgroundColor: 'white', overflow: 'hidden',
    borderTopLeftRadius: 20*em, borderTopRightRadius: 20*em,
    paddingTop: 7*em, paddingBottom: 20*em, paddingHorizontal: 15*em
  },
  bottomRow: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

export default styles;