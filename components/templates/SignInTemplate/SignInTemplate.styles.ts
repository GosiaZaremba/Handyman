import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  background: {
    flex: 1,
    paddingVertical: 10,
  },
  profilePhoto: {
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '30%',
  },
  photoContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.profilePhotoBackground,
    padding: 5,
  },
});
