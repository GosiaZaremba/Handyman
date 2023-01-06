import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  calendar: {
    // height: 100
    padding: 10,
  },
  dateNumberStyle: {
    color: Colors.font.darkGrey,
    fontFamily: 'OpenSans-Regular',
  },
  dateNameStyle: {
    color: Colors.font.darkGrey,
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    marginBottom: 5,
  },
  iconContainer: {
    display: 'none',
  },
  highlightDateNumberStyle: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.font.white,
    fontSize: 16,
  },
  highlightDateNameStyle: {
    color: Colors.font.darkGrey,
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    marginTop: 5,
  },
  highlightDateNumberContainerStyle: {
    backgroundColor: Colors.button.dark,
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
