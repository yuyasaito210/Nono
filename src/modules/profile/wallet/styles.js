import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

const styles = StyleSheet.create({
  pageWrapper: {
    position: 'relative', zIndex: 5,
    paddingTop: 50*em, paddingHorizontal: 15*em,
    backgroundColor: '#fff',
    width: W, height: H
  }
})

export default styles;