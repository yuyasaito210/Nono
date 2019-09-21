import { StyleSheet } from 'react-native';
import { em, W, H } from '~/constants/Layout';

const topBoxStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, top: 0,
    width: W, zIndex: 20,
  },
  topBarContainer: {
    backgroundColor: '#35cdfa',
    height: 80*em,
    flexDirection: 'row'
  },
  topBarImageContainer: {
    marginTop: 20*em, marginLeft: 20*em
  },
  topBarDistanceContainer: {
    flexDirection: 'row'
  },
  topBarDistance: {
    fontSize: 18*em, color: '#fff', fontWeight: 'bold'
  },  
  topBarDesc: {
    fontSize: 24*em, color: '#fff', fontWeight: 'bold',
    marginTop: 30*em, marginLeft: 10*em
  },
  topBarImage: {
    marginTop: 1*em, marginLeft: 10*em
  },
  bottomBarContainer: {
    backgroundColor: '#00b1ec',
    height: 40*em, 
    paddingHorizontal: 20*em, paddingVertical: 10*em,
    flexDirection: 'row'
  },
  bottomBarDesc: {
    fontSize: 16*em, color: '#fff'
  },
  bottomBarImage: {
    marginTop: 3*em, marginLeft: 10*em
  }
})

const bottomBoxStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, bottom: 80*em, zIndex: 20,
    width: W, height: 100*em,
    paddingHorizontal: 20*em, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 20*em, borderTopRightRadius: 20*em
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: W, height: 20*em
  },
  bgImage: {
    width: 40*em, height: 5*em
  },
  innerContainer: {
    flexDirection: 'row', justifyContent: 'space-between'
  },
  descTitle: {
    color: '#35CDFA', fontSize: 20*em, fontWeight: 'bold'
  },
  descText: {
    color: '#7E888D', fontSize: 14*em
  }
})

export default {
  topBox: topBoxStyles,
  bottomBox: bottomBoxStyles
}