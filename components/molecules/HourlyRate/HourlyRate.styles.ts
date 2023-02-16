import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 82,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.font.darkGrey,
  },
});
