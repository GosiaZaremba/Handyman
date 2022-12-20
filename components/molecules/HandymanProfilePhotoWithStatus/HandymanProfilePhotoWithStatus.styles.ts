import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  status: {
    borderWidth: 2,
    borderColor: Colors.font.white,
    borderRadius: 10,
    height: 14,
    width: 14,
    top: -15,
    left: 20,
  },
});
