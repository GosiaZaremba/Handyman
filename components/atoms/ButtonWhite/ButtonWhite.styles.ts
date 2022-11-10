import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  pressable: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.font.green,
    fontFamily: 'OpenSans-Regular',
  },
});
