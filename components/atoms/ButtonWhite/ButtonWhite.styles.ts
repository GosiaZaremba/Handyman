import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.font.white,
    elevation: 8,
  },
  pressable: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.font.white,
  },
  pressed: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.font.white,
    opacity: 0.8,
  },
  buttonText: {
    color: Colors.font.green,
    fontFamily: 'OpenSans-Bold',
  },
});
