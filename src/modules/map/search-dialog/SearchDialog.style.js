import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

export const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, bottom: 0,
    width: W, height: 250,
    zIndex: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25, borderTopRightRadius: 25,
    paddingHorizontal: 20
  },
  containerExpanded: {
    height: 600
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: W, height: 20
  },
  bgImage: {
    width: 40, height: 5
  },

})

export const barStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 15,
    justifyContent: 'center', alignItems: 'center',
    height: 40
  },
  searchIcon: {
    marginHorizontal: 15
  },
  searchText: {
    width: 210
  },
  searchButton: {
    backgroundColor: '#fff', 
    height: 40,
    marginHorizontal: 15,
    shadowOpacity: 0,
    shadowColor: 'transparent',
    marginTop: 10
  },
  searchButtonText: {
    color: '#BFBFC4',
  },
  searchButtonTextOnSearched: {
    color: '#35CDFA',
  }
})

export const resultStyles = StyleSheet.create({
  container: {

  },
  itemContainer: {
    flexDirection: 'row', height: 130
  },
  itemImageContainer: {

  },
  itemImage: {
    width: 40, height: 40,
    borderWidth: 1,  // Set border width.      
    borderRadius: 15,  // Set border Radius. 
  },

  itemDesc: {
    left: 10,  fontSize: 18, 
  },

  itemTitle: {
    top: -5, fontWeight: 'bold', 
  },
  itemOuvert: {
    color: '#1BE497', 
  },

  itemBattery: {
    top: 10, left: -10,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  itemGo: {
    top: 10, height: 30, color: '#0000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  goImage: {
  },
  itemGoText: {
    left: 5,
  }
  
})