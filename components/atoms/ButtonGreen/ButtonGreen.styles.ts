import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  gradient: {
    borderRadius: 10,
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  pressable: {
    borderRadius: 10,
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
    borderRadius: 10,
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
  },
});
