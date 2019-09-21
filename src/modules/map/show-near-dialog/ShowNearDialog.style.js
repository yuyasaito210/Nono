import { StyleSheet } from 'react-native';
import Layout, { em } from '~/constants/Layout';

export const headerBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20*em
  },
  searchLimit: {
    fontSize: 12*em, color: '#bfbfc4'
  },
  stations: {
    fontSize: 20*em, color: '#36384A', fontWeight: 'bold'
  }
})

export const listStyles = StyleSheet.create({
  container: {

  }
})

export const itemStyles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288*em, height: 120*em,
    marginLeft: 20*em, marginTop: 15*em, marginBottom: 15*em,
    flexDirection: 'row'
  },
  containerBg: {
    width: 288*em, height: 100*em,
    flexDirection: 'row'
  },
  imageContainer: {
    overflow: 'hidden'
  },
  image: {
    width: 40*em, height: 40*em,
    borderRadius: 15, borderWidth: 1
  },

  itemDesc: {
    left: 10*em,  fontSize: 16*em, 
  },

  title: {
    fontSize: 16*em, fontWeight: "bold"
  },
  
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5*em,
  },

  itemOuvert: {
    color: '#07E28E', fontSize: 12*em,
  },

  batteriesAndPlaces: {
    top: 10*em, left: -15*em,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  batteries: {
    color: '#35CDFA'
  },
  places: {
    color: '#35CDFA', left: 25*em,
  },



  
})

export const bottomBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20*em,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  searchButtonContainer: {
    width: 190*em
  },
  resetButtonContainer: {
    width: 130*em
  }
})

export const filterWrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30*em, borderTopRightRadius: 30 *em,
    position: 'absolute', left: 0, bottom: 0, zIndex: 20,
    width: Layout.window.width, 
    backgroundColor: '#35CDFA'
  },
  headerBar: {
    paddingVertical: 20*em, paddingHorizontal: 20*em,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filterContainer: {
    flexDirection: 'row'
  },
  filterImage: {
    width: 16*em, height: 16*em
  },
  filterText: {
    fontSize: 14*em, color: '#fff', fontWeight: 'bold',
    marginLeft: 10*em
  },
  resetFilterButtonContainer: {
    opacity: 0.5
  },
  resetFilterButton: {
    fontSize: 14*em, color: '#fff', fontWeight: 'bold'
  }
})

export const showNearWrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20*em, borderTopRightRadius: 20*em,
    backgroundColor: '#fff',
    height: 260*em,
    position: 'relative'
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: Layout.window.width, height: 20*em,
  },
  bgImage: {
    width: 40*em, height: 5*em
  },
  closeButton: {
    position: 'absolute', right: 20*em, top: 0
  }
})

const styles = {
  filterWrapper: filterWrapperStyles,
  showNearWrapper: showNearWrapperStyles,
  headerBar: headerBarStyles,
  list: listStyles,
  item: itemStyles,
  bottomBar: bottomBarStyles
}

export default styles;