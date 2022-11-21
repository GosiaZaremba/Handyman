import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  image: {height: 90, width: 90, borderRadius: 50, zIndex: 1},
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
