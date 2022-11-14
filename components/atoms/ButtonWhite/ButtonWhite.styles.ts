import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  pressable: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pressed: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  buttonText: {
    color: Colors.font.green,
    fontFamily: 'OpenSans-Bold',
  },
});
