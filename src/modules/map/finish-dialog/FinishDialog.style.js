import { StyleSheet } from 'react-native';
import { em, W, H } from '~/constants/Layout';

const topBoxStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, top: 0,
    width: W, zIndex: 20,
  },
  topBarContainer: {
    backgroundColor: '#35cdfa',
    flexDirection: 'row',
    paddingTop: 30, paddingBottom: 20
  },
  topBarImageContainer: {
    marginTop: 20, marginLeft: 20
  },
  topBarDistanceContainer: {
    flexDirection: 'row'
  },
  topBarDistance: {
    fontSize: 18, color: '#fff', fontWeight: 'bold'
  },  
  topBarDesc: {
    fontSize: 24, color: '#fff', fontWeight: 'bold',
    marginTop: 30, marginLeft: 10
  },
  topBarImage: {
    marginTop: 1, marginLeft: 10
  },
  bottomBarContainer: {
    backgroundColor: '#00b1ec',
    height: 40, 
    paddingHorizontal: 20, paddingVertical: 10,
    flexDirection: 'row'
  },
  bottomBarDesc: {
    fontSize: 16, color: '#fff'
  },
  bottomBarImage: {
    marginTop: 3, marginLeft: 10
  }
})

const bottomBoxStyles = StyleSheet.create({
  container: {
    position: 'absolute', left: 0, bottom: 0, zIndex: 20,
    width: W, 
    paddingHorizontal: 20, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 20, borderTopRightRadius: 20
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: W, height: 20
  },
  bgImage: {
    width: 40, height: 5
  },
  innerContainer: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingBottom: 20
  },
  descTitle: {
    color: '#35CDFA', fontSize: 20, fontWeight: 'bold'
  },
  descText: {
    color: '#7E888D', fontSize: 14
  }
})

export default {
  topBox: topBoxStyles,
  bottomBox: bottomBoxStyles
}