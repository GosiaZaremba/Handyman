import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  pressed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: Colors.drawer.highlight,
    borderRadius: 5,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
  },
  notificationContainer: {
    width: '25%',
    padding: 2,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 20,
    textAlign: 'center',
    marginLeft: 25,
  },
});
