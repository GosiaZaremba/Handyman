import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: 105,
    height: 105,
  },
  photoContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.profilePhotoBackground,
    padding: 5,
  },
});
