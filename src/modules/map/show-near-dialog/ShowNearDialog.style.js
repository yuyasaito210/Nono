import { StyleSheet } from 'react-native';
import Layout, { em } from '~/constants/Layout';

export const headerBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  topSection: {
    flexDirection: 'row'
  },
  searchLimit: {
    fontSize: 12, color: '#bfbfc4',
    flex: 2,
    alignItems: 'flex-start'
  },
  closeButton: {
    flex: 1,
    alignItems: 'flex-end',
    width: 12,
    height: 12
  },
  stations: {
    fontSize: 20, color: '#36384A', fontWeight: 'bold'
  },

})

export const listStyles = StyleSheet.create({
  container: {

  }
})

export const itemStyles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288, height: 120,
    marginLeft: 20, marginTop: 15, marginBottom: 15,
    flexDirection: 'row'
  },
  containerBg: {
    width: 288, height: 100,
    flexDirection: 'row'
  },
  imageContainer: {
    overflow: 'hidden'
  },
  image: {
    width: 40, height: 40,
    borderRadius: 15, borderWidth: 1
  },

  itemDesc: {
    left: 10,  fontSize: 16, 
  },

  title: {
    fontSize: 16, fontWeight: "bold"
  },
  
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5,
  },

  itemOuvert: {
    color: '#07E28E', fontSize: 12,
  },

  batteriesAndPlaces: {
    top: 10, left: -15,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  batteries: {
    color: '#35CDFA'
  },
  places: {
    color: '#35CDFA', left: 25,
  },



  
})

export const bottomBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  searchButtonContainer: {
    width: 190
  },
  resetButtonContainer: {
    width: 130
  }
})

export const filterWrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30, borderTopRightRadius: 30 ,
    position: 'absolute', left: 0, bottom: 0, zIndex: 20,
    width: Layout.window.width, 
    backgroundColor: '#35CDFA'
  },
  headerBar: {
    paddingVertical: 20, paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filterContainer: {
    flexDirection: 'row'
  },
  filterImage: {
    width: 16, height: 16
  },
  filterText: {
    fontSize: 14, color: '#fff', fontWeight: 'bold',
    marginLeft: 10
  },
  resetFilterButtonContainer: {
    opacity: 0.5
  },
  resetFilterButton: {
    fontSize: 14, color: '#fff', fontWeight: 'bold'
  }
})

export const showNearWrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    backgroundColor: '#fff',
    height: 260,
    position: 'relative'
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: Layout.window.width, height: 20,
  },
  bgImage: {
    width: 40, height: 5
  },
  closeButton: {
    right: 20, top: 0
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