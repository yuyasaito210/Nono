import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

const wrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30*em, borderTopRightRadius: 30 *em,
    position: 'absolute', left: 0, bottom: 0, zIndex: 20,
    width: W, height: 320*em,
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

const filterOptionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginVertical: 5*em
  },
  comboBox: {
    width: 54*em, height: 30*em
  },
  comboBoxInverted: {
    
  },
  text: {
    fontSize: 20*em, color: '#fff'
  }
})

export const bottomBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginTop: 20*em
  },
  searchButtonContainer: {
    width: 120*em
  },
  resetButtonContainer: {
    width: 200*em
  }
})

export default {
  wrapper: wrapperStyles,
  filterOption: filterOptionStyles,
  bottomBar: bottomBarStyles
}