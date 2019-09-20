import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const W = width;
export const H = height;
export const em = width/375;

export default {
  window: {
    width,
    height,
  },
  em,
  W,
  H,
  isSmallDevice: width < 375,
};
