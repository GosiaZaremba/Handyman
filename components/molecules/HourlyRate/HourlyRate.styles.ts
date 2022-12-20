import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 105,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.font.darkGrey,
  },
});
