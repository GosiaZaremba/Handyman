import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'stretch',
  },
  buttonContainer: {
    width: '35%',
    alignSelf: 'flex-end',
    marginRight: 25,
  },
});
