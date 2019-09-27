import { Dimensions, Platform } from 'react-native';

const dim = Dimensions.get('window');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const W = width;
export const H = Platform.OS === 'ios'?height-80:height-70;
export const em = width/375;

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

export function isIPhoneX() {
  return (Platform.OS === 'ios') && (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
}

export default {
  window: {
    width,
    height,
  },
  em,
  W,
  H,
  isSmallDevice: width < 375,
  isIPhoneX: isIPhoneX()
};
