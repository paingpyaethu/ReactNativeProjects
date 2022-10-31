import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const scale = SCREEN_WIDTH / 375;

const _scale = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default {_scale, width, height};
