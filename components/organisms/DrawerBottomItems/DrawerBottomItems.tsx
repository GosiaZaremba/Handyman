import React from 'react';
import {View} from 'react-native';
import {FAIcon} from '../../atoms';
import {DrawerItem} from '@react-navigation/drawer';
import {Colors} from '../../../constants/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

export const DrawerBottomItems: React.FC = () => {
  return (
    <View>
      <DrawerItem
        label="Share"
        onPress={() => {
          console.log('Share');
        }}
        icon={() => (
          <AntDesignIcon color={Colors.font.grey} size={20} name={'sharealt'} />
        )}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {
          console.log('Settings');
        }}
        icon={() => (
          <AntDesignIcon color={Colors.font.grey} size={20} name={'setting'} />
        )}
      />
    </View>
  );
};
