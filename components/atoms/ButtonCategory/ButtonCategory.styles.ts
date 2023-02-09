import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: 120,
    height: 95,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.font.white,
    elevation: 8,
  },
  pressed: {
    width: 120,
    height: 95,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.button.categoryButton,
    borderWidth: 1,
    borderColor: Colors.icon,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.font.white,
  },
  image: {
    width: 40,
    height: 40,
    zIndex: 1,
  },
  icon: {
    fontSize: 14,
    color: Colors.icon,
    marginRight: 7,
  },
  iconContainer: {
    height: 14,
    alignSelf: 'flex-end',
  },
  iconHidden: {
    fontSize: 15,
    color: Colors.icon,
    marginRight: 7,
    display: 'none',
  },
});
