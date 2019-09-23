import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

const wrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30, borderTopRightRadius: 30 ,
    position: 'absolute', left: 0, bottom: 0, zIndex: 20,
    width: W, height: 320,
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

const filterOptionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginVertical: 5
  },
  comboBox: {
    width: 54, height: 30
  },
  comboBoxInverted: {
    
  },
  text: {
    fontSize: 20, color: '#fff'
  }
})

export const bottomBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginTop: 20
  },
  searchButtonContainer: {
    width: 120
  },
  resetButtonContainer: {
    width: 200
  }
})

export default {
  wrapper: wrapperStyles,
  filterOption: filterOptionStyles,
  bottomBar: bottomBarStyles
}