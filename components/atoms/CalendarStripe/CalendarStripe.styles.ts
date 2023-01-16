import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  calendar: {
    padding: 10,
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
    height: 30,
    width: 30,
    justifyContent: 'center',
    elevation: 8,
  },
  dayContainerStyle: {
    // padding: 5,
    height: 35,
  },
});
