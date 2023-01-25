import React from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import styles from './DrawerMainItems.styles';
import {CustomIcon} from '../../atoms';
import svgs from '../../../assets/svgs/svgs';

export type Props = {
  isMenuItemPressed: boolean;
};

export const DrawerMainItems: React.FC<Props> = ({isMenuItemPressed}) => {
  return (
    <View style={styles.itemsContainer}>
      <DrawerItem
        label="Profile"
        onPress={() => {
          console.log('Profile');
        }}
        icon={() => (
          <CustomIcon
            icon={isMenuItemPressed ? svgs.green.user : svgs.grey.user}
          />
        )}
      />
      <DrawerItem
        label="Projects"
        onPress={() => {
          console.log('dropbox');
        }}
        icon={() => (
          <CustomIcon
            icon={isMenuItemPressed ? svgs.green.box : svgs.grey.box}
          />
        )}
      />
      <DrawerItem
        label="Message"
        onPress={() => {
          console.log('Message');
        }}
        icon={() => (
          <CustomIcon
            icon={isMenuItemPressed ? svgs.green.message : svgs.grey.message}
          />
        )}
      />
      <DrawerItem
        label="Help Video"
        onPress={() => {
          console.log('Help Video');
        }}
        icon={() => (
          <CustomIcon
            icon={isMenuItemPressed ? svgs.green.video : svgs.grey.video}
          />
        )}
      />
      <DrawerItem
        label="Share"
        onPress={() => {
          console.log('Share');
        }}
        icon={() => (
          <CustomIcon
            icon={isMenuItemPressed ? svgs.green.share : svgs.grey.share}
          />
        )}
      />
      <DrawerItem
        label="Rate App"
        onPress={() => {
          console.log('Rate App');
        }}
        icon={() => (
          <CustomIcon
            icon={
              isMenuItemPressed ? svgs.green.favourites : svgs.grey.favourites
            }
          />
        )}
      />
    </View>
  );
};
