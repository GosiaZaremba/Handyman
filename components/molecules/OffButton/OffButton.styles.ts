import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  pressable: {
    backgroundColor: Colors.font.white,
    padding: 5,
    width: 35,
    height: 35,
    borderRadius: 25,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {},
});
