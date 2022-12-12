import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: 65,
    height: 65,
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
