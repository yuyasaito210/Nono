import { StyleSheet } from 'react-native';
import { W, H, em } from '~/constants/Layout';

export const wrapperStyles = StyleSheet.create({
  outerContainer: {
  },
  container: {    
    position: 'relative',
    width: '100%', height: '100%'
  }
})

export const buttonStyles = StyleSheet.create({
  button: {
    position: 'absolute', zIndex: 10,
    width: 50, height: 50, 
    borderRadius: 25, backgroundColor: '#fff',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  profileButton: { 
    left: 20, top: 50 
  },
  giftbutton: { 
    right: 20, top: 50 
  },
  searchbutton: { 
    right: 20, bottom: 140 
  },
  refreshbutton: { 
    right: 20, bottom: 71,
    borderTopLeftRadius:20,  borderTopRightRadius:20,  borderBottomLeftRadius:1, borderBottomRightRadius:1
  },
  targetbutton: { 
    right: 20, bottom: 20, 
    borderTopLeftRadius:1,  borderTopRightRadius:1,  borderBottomLeftRadius:20, borderBottomRightRadius:20
  }
})