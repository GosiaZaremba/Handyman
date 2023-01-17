import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {fontWeight: 'bold'},
  drawerStyle: {
    backgroundImage: require('../../../assets/png/05_top.png'),
    backgroundColor: Colors.font.white,
    width: 300,
  },
});
