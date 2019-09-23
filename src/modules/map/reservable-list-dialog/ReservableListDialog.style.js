import { StyleSheet } from 'react-native';
import { em, W, H } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, bottom: 0, zIndex: 20,
    width: W, height: 320,
    borderTopLeftRadius: 30, borderTopRightRadius: 30 ,
    backgroundColor: '#fff'
  },
  headerBar: {
    position: 'relative',
    width: W, height: 40,
    margin: 10 
  },
  closeButton: {
    position: 'absolute', top: 0, right: 20
  }
})

const descStyles = StyleSheet.create({
  container: {
  },
  title: {
    top: -40, color: '#313131', fontSize: 22, fontWeight: 'bold', textAlign: "center"
  },
  content: {
    top: -30, color: '#313131', fontSize: 14, textAlign: "center"
  }
})

export const listStyles = StyleSheet.create({
  container: {

  }
})

export const itemStyles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288, height: 120,
    marginLeft: 20, marginTop: 15, marginBottom: 15,
    flexDirection: 'row'
  },
  containerBg: {
    width: 288, height: 100,
    flexDirection: 'row'
  },
  imageContainer: {
    overflow: 'hidden'
  },
  image: {
    width: 40, height: 40,
    borderRadius: 15, borderWidth: 1
  },

  itemDesc: {
    left: 10,  fontSize: 16, 
  },

  title: {
    fontSize: 16, fontWeight: "bold"
  },
  
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5,
  },

  itemOuvert: {
    color: '#07E28E', fontSize: 12,
  },

  batteriesAndPlaces: {
    top: 10, left: -15,
    color: '#35CDFA',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  batteries: {
    color: '#35CDFA'
  },
  places: {
    color: '#35CDFA', left: 25,
  }, 
})

const actionBarStyles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginHorizontal: 20, paddingHorizontal: 10,
    backgroundColor: '#5ED8FC',
    flexDirection: 'row', justifyContent: 'space-between'
  },
  titleContainer: {
    paddingVertical: 10
  },
  title: {
    fontSize: 16, color: '#fff', lineHeight: 24, paddingLeft: 15
  },
  actContainer: {
    flexDirection: 'row',
    paddingVertical: 10 
  },
  actButtonContainer: {
    backgroundColor: 'transparent',     
  },
  actButton: {
    width: 26, height: 26,
    opacity: 0.8,
    marginHorizontal: 5
  },
  reserveCount: {
    color: '#fff', fontSize: 16, lineHeight: 24
  }
})

export default {
  wrapper: wrapperStyles,
  desc: descStyles,
  list: listStyles,
  item: itemStyles,
  actionBar: actionBarStyles
}