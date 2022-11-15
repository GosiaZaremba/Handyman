import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  input: {fontFamily: 'OpenSans-Regular'},
  inputContainer: {
    borderBottomColor: Colors.grey.divider,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressable: {marginRight: 10},
  icon: {fontSize: 18, color: Colors.font.grey},
});
