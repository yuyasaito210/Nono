import { StyleSheet } from 'react-native';
import Layout, { em } from '../../../constants/Layout';

const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40*em, left: 0,
    zIndex: 15,
    width: Layout.window.width, height: 120*em,
    backgroundColor: '#fff',
    paddingTop: 20*em, paddingHorizontal: 20*em, 
    borderTopLeftRadius: 25*em, borderTopRightRadius: 25*em
  }
})

const contentStyles = StyleSheet.create({
  unlockButton: {
    backgroundColor: '#5ED8FC',
    borderRadius: 15*em,
    color: '#fff'
  }
})