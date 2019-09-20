import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

const wrapperStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30*em, borderTopRightRadius: 30 *em,
    position: 'absolute', left: 0, bottom: 80*em, zIndex: 20,
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

export default {
  wrapper: wrapperStyles
}