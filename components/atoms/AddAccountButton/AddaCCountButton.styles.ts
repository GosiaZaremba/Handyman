import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  pressed: {
    opacity: 0.9,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    left: 70,
    position: 'relative',
    width: 30,
    height: 30,
  },
  pressable: {
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    left: 70,
    position: 'relative',
    width: 30,
    height: 30,
  },
  buttonIcon: {color: '#43b35d', fontSize: 26},
});
