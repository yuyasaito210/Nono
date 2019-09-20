import { Dimensions, Platform } from 'react-native';

const dim = Dimensions.get('window');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
  isSmallDevice: width < 375,
  isIPhoneX: isIPhoneX()
};
