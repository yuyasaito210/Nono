import { StyleSheet } from 'react-native';
import { em, W, H } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, bottom: 0, zIndex: 20,
    width: W, height: 680*em,
    borderTopLeftRadius: 30*em, borderTopRightRadius: 30 *em,
    backgroundColor: '#fff'
  },
  headerBar: {
    position: 'relative',
    width: W, 
    margin: 20 *em
  },
  closeButton: {
    position: 'absolute', top: 0, right: 35*em
  }
})

const descStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -120*em, height: 50*em,
  },  
  imageContainer: {
      
  },
  itemOuvert: {
    fontSize: 16*em, height: 25*em,
    left: 20*em, marginTop: -5*em
  }
})

const phoneStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -235*em, height: 50*em,
  },
  itemView: {
    fontSize: 16*em, height: 25*em,
    left: 20*em,
  }
})

const urlStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -180*em, height: 50*em,
  },
  item: {
    fontSize: 16*em, height: 25*em,
    left: 20*em,
  }
})

const partaStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -265*em, height: 50*em,
  },
  item: {
    fontSize: 16*em, height: 25*em,
    left: 20*em,
  }
})

const timeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -265*em, height: 50*em,
  },
  item: {
    fontSize: 16*em, height: 25*em,
    left: 20*em,
  }
})



export const listStyles = StyleSheet.create({
  container: {

  }
})

export const itemStyles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288*em, height: 80*em,
    marginLeft: 20*em, marginTop: 15*em, marginBottom: 15*em,
    flexDirection: 'row'
  },
  containerBg: {
    width: 288*em, height: 100*em,
    flexDirection: 'row'
  },
  imageContainer: {
    overflow: 'hidden'
  },
  image: {
    width: 40*em, height: 40*em,
    borderRadius: 15, borderWidth: 1
  },

  itemDesc: {
    left: 10*em,  fontSize: 25*em, 
  },

  title: {
    fontSize: 20*em, fontWeight: "bold", marginTop: -5*em
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5*em, fontSize: 20*em, 
  },

  itemOuvert: {
    color: '#07E28E', fontSize: 12*em,
  },

  batteriesAndPlaces: {
    top: 10*em, left: -15*em,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  batteries: {
    color: '#35CDFA'
  },
  places: {
    color: '#35CDFA', left: 25*em,
  },
})

const bottomBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20*em,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  searchButtonContainer: {
    width: 190*em
  },
  resetButtonContainer: {
    width: 130*em
  }
})

export default {
  wrapper: wrapperStyles,
  desc: descStyles,
  phone: phoneStyles,
  url: urlStyles,
  parta: partaStyles,
  time: timeStyles,
  list: listStyles,
  item: itemStyles,
  bottomBar: bottomBarStyles
}