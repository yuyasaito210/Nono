import { StyleSheet } from 'react-native';
import Layout, { em } from '~/constants/Layout';

export const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0, left: 0,
    zIndex: 15,
    width: Layout.window.width, height: 80*em,
    backgroundColor: '#fff',
    paddingTop: 20*em, paddingHorizontal: 20*em, 
    borderTopLeftRadius: 25*em, borderTopRightRadius: 25*em
  }
})