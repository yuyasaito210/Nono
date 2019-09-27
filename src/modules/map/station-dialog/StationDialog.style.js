import { StyleSheet } from 'react-native';
import { em, W, H } from '~/constants/Layout';
import { bold } from 'ansi-colors';

const wrapperStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0, bottom: 0, zIndex: 20,
    width: W, 
    borderTopLeftRadius: 30, borderTopRightRadius: 30 ,
    backgroundColor: '#fff'
  },
  headerBar: {
    position: 'relative',
    width: W, 
    margin: 20 
  },
  closeButton: {
    position: 'absolute', top: 0, right: 35
  }
})

const descStyles = StyleSheet.create({
  row: {
    flexDirection: 'row', 
    paddingHorizontal: 20, marginVertical: 10
  },
  col1: {
    width: 50,
  },
  col2: {
  }
})

const phoneStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
  },
  itemView: {
    fontSize: 16, height: 25,
  }
})

const urlStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -180, height: 50,
  },
  item: {
    fontSize: 16, height: 25,
    left: 20,
  }
})

const partaStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -265, height: 50,
  },
  item: {
    fontSize: 16, height: 25,
    left: 20,
  }
})

const timeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    left: -265, height: 50,
  },
  item: {
    fontSize: 16, height: 25,
    left: 20,
  }
})



export const listStyles = StyleSheet.create({
  container: {

  }
})

export const itemStyles = StyleSheet.create({
  container: {    
    position: 'relative',
    width: 288, height: 80,
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
    left: 10,  fontSize: 25, 
  },

  title: {
    fontSize: 20, fontWeight: "bold", marginTop: -5
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 5, fontSize: 20, 
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

const bottomBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  searchButtonContainer: {
    width: 190
  },
  resetButtonContainer: {
    width: 130
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