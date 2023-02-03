import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  outerContainer: {},
  photoContainer: {
    borderRadius: 50,
    height: 55,
    width: 55,
    backgroundColor: Colors.font.white,
    padding: 3,
    elevation: 7,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
