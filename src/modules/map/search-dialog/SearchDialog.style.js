import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

export const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, bottom: 0,
    width: W, height: 250*em,
    zIndex: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25*em, borderTopRightRadius: 25*em,
    paddingHorizontal: 20*em
  },
  containerExpanded: {
    height: 600*em
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: W, height: 20*em
  },
  bgImage: {
    width: 40*em, height: 5*em
  },

})

export const barStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 15*em,
    justifyContent: 'center', alignItems: 'center',
    height: 40*em
  },
  searchIcon: {
    marginHorizontal: 15*em
  },
  searchText: {
    width: 210*em
  },
  searchButton: {
    backgroundColor: '#fff', 
    height: 40*em,
    marginHorizontal: 15*em,
    shadowOpacity: 0,
    shadowColor: 'transparent',
    marginTop: 10*em
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
    flexDirection: 'row', height: 130*em
  },
  itemImageContainer: {

  },
  itemImage: {
    width: 40*em, height: 40*em,
    borderWidth: 1,  // Set border width.      
    borderRadius: 15,  // Set border Radius. 
  },

  itemDesc: {
    left: 10*em,  fontSize: 18*em, 
  },

  itemTitle: {
    top: -5*em, fontWeight: 'bold', 
  },
  itemOuvert: {
    color: '#1BE497', 
  },

  itemBattery: {
    top: 10*em, left: -10*em,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  itemGo: {
    top: 10*em, height: 30*em, color: '#0000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  goImage: {
  },
  itemGoText: {
    left: 5*em,
  }
  
})