import React from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Colors} from '../../../constants/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './DrawerMainItems.styles';

export const DrawerMainItems: React.FC = () => {
  return (
    <View style={styles.itemsContainer}>
      <DrawerItem
        label="Profile"
        onPress={() => {
          console.log('Profile');
        }}
        icon={() => (
          <AntDesignIcon color={Colors.font.grey} size={20} name={'user'} />
        )}
      />
      <DrawerItem
        label="Projects"
        onPress={() => {
          console.log('dropbox');
        }}
        icon={() => (
          <FontAwesome5Icon color={Colors.font.grey} size={20} name={'box'} />
        )}
      />
      <DrawerItem
        label="Message"
        onPress={() => {
          console.log('Message');
        }}
        icon={() => (
          <FontAwesomeIcon
            color={Colors.font.grey}
            size={20}
            name={'envelope-o'}
          />
        )}
      />
      <DrawerItem
        label="Help Video"
        onPress={() => {
          console.log('Help Video');
        }}
        icon={() => (
          <MaterialIconsIcon
            color={Colors.font.grey}
            size={20}
            name={'ondemand-video'}
          />
        )}
      />
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
        label="Rate App"
        onPress={() => {
          console.log('Rate App');
        }}
        icon={() => (
          <AntDesignIcon color={Colors.font.grey} size={20} name={'staro'} />
        )}
      />
    </View>
  );
};
