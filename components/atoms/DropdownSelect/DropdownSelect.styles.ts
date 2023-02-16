import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.font.white,
    elevation: 8,
    borderRadius: 8,
  },
  dropdown: {
    height: 35,
    borderColor: Colors.menuIcons.grey,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
  },
  focused: {
    borderColor: Colors.font.white,
  },
});
