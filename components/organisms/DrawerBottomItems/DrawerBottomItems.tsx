import React from 'react';
import {View} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Colors} from '../../../constants/colors';
import {CustomIcon} from '../../atoms';
import svgs from '../../../assets/svgs/svgs';

export type Props = {
  isMenuItemPressed: boolean;
};

export const DrawerBottomItems: React.FC<Props> = ({isMenuItemPressed}) => {
  return (
    <View>
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
        label="Settings"
        onPress={() => {
          console.log('Settings');
        }}
        icon={() => (
          <CustomIcon
            icon={isMenuItemPressed ? svgs.green.share : svgs.grey.share}
          />
        )}
      />
    </View>
  );
};
