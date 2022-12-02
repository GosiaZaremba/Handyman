import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  gradient: {
    borderRadius: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    elevation: 8,
  },
  pressable: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.font.white,
    fontFamily: 'OpenSans-Bold',
  },
  icon: {
    fontSize: 18,
    color: Colors.font.white,
  },
});
