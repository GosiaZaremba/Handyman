import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  pressed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    backgroundColor: Colors.drawer.highlight,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-evenly',
  },
  notificationContainer: {
    width: '25%',
    padding: 2,
  },
  text: {
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 20,
    textAlign: 'center',
  },
});
