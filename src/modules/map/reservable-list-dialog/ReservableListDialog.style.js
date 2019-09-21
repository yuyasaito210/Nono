import { StyleSheet } from 'react-native';
import { em, W, H } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, bottom: 0, zIndex: 20,
    width: W, height: 320*em,
    borderTopLeftRadius: 30*em, borderTopRightRadius: 30 *em,
    backgroundColor: '#fff'
  },
  headerBar: {
    position: 'relative',
    width: W, height: 40*em,
    margin: 10 *em
  },
  closeButton: {
    position: 'absolute', top: 0, right: 20*em
  }
})

const descStyles = StyleSheet.create({
  container: {
  },
  title: {
    top: -40*em, color: '#313131', fontSize: 22*em, fontWeight: 'bold', textAlign: "center"
  },
  content: {
    top: -30, color: '#313131', fontSize: 14*em, textAlign: "center"
  }
})

export const listStyles = StyleSheet.create({
  container: {

  }
})

export const itemStyles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288*em, height: 120*em,
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
    left: 10*em,  fontSize: 16*em, 
  },

  title: {
    fontSize: 16*em, fontWeight: "bold"
  },
  
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5*em,
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

const actionBarStyles = StyleSheet.create({
  container: {
    borderRadius: 20*em,
    marginHorizontal: 20*em, paddingHorizontal: 10*em,
    backgroundColor: '#5ED8FC',
    flexDirection: 'row', justifyContent: 'space-between'
  },
  titleContainer: {
    paddingVertical: 10*em
  },
  title: {
    fontSize: 16*em, color: '#fff', lineHeight: 24*em
  },
  actContainer: {
    flexDirection: 'row',
    paddingVertical: 10 *em
  },
  actButtonContainer: {
    backgroundColor: 'transparent',     
  },
  actButton: {
    width: 26*em, height: 26*em,
    opacity: 0.8,
    marginHorizontal: 5*em
  },
  reserveCount: {
    color: '#fff', fontSize: 16*em, lineHeight: 24*em
  }
})

export default {
  wrapper: wrapperStyles,
  desc: descStyles,
  list: listStyles,
  item: itemStyles,
  actionBar: actionBarStyles
}