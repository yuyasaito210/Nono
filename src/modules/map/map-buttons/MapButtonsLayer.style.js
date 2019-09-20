import { StyleSheet } from 'react-native';
import { em } from '~/constants/Layout';

export const wrapperStyles = StyleSheet.create({
  container: {
    zIndex: 10
  }
})

export const buttonStyles = StyleSheet.create({
  button: {
    position: 'absolute', 
    width: 50*em, height: 50*em, 
    borderRadius: 25*em, backgroundColor: '#fff',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  profileButton: { 
    left: 20*em, top: 50*em 
  },
  giftbutton: { 
    right: 20*em, top: 50*em 
  },
  searchbutton: { 
    right: 20*em, top: 320*em 
  },
  refreshbutton: { 
    right: 20*em, top: 387*em,
    borderTopLeftRadius:20*em,  borderTopRightRadius:20*em,  borderBottomLeftRadius:1*em, borderBottomRightRadius:1*em
  },
  targetbutton: { 
    right: 20*em, top: 360*em, 
    borderTopLeftRadius:1*em,  borderTopRightRadius:1*em,  borderBottomLeftRadius:20*em, borderBottomRightRadius:20*em
  }
})