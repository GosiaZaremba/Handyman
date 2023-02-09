import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  calendar: {
    marginTop: 10,
    height: 50,
  },
  dateNumberStyle: {
    color: Colors.font.darkGrey,
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
  dateNameStyle: {
    color: Colors.font.darkGrey,
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    marginBottom: 5,
  },
  iconContainer: {
    display: 'none',
  },
  highlightDateNumberStyle: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.font.white,
    fontSize: 12,
  },
  highlightDateNameStyle: {
    color: Colors.font.darkGrey,
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    marginTop: 5,
  },
  highlightDateNumberContainerStyle: {
    backgroundColor: Colors.calendar,
    borderRadius: 25,
    height: 28,
    width: 28,
    justifyContent: 'center',
    elevation: 8,
  },
  dayContainerStyle: {
    height: 32,
  },
  innerStyle: {flex: 1},
});
