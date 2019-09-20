import { StyleSheet } from 'react-native';
import Layout, { em } from '~/constants/Layout';

export const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, top: Layout.window.height - 250*em,
    width: Layout.window.width, height: 250*em,
    zIndex: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25*em, borderTopRightRadius: 25*em,
    paddingHorizontal: 20*em
  },
  containerExpanded: {
  },
  bgImageContainer: {
    justifyContent: 'center', alignItems: 'center',
    width: Layout.window.width, height: 20*em
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
    top: 10*em, 
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  itemGo: {
    left: -25*em, top: 20*em, height: 50*em,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goImage: {
    // width:15*em, height: 15*em,
    flex: 1
  }
})