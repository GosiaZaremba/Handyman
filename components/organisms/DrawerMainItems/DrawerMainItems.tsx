import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './DrawerMainItems.styles';
import svgs from '../../../assets/svgs/svgs';
import {Colors} from '../../../constants/colors';
import {DrawerMenuItem} from '../../molecules';

export type Props = {};

export const DrawerMainItems: React.FC<Props> = ({}) => {
  const [active, setActive] = useState<string>('');

  const onPressInMenuItem = (screenName: string) => {
    setActive(screenName);
    // onPressNavigation(screenName);
    console.log('navigate to', screenName);
  };
  const onPressOutMenuItem = () => {
    setActive('');
  };

  return (
    <View style={styles.itemsContainer}>
      <View>
        <DrawerMenuItem
          icon={active === 'Profile' ? svgs.green.user : svgs.grey.user}
          itemText={'Profile'}
          textColor={active === 'Profile' ? Colors.icon : Colors.font.darkGrey}
          onPressIn={() => onPressInMenuItem('Profile')}
          onPressOut={onPressOutMenuItem}
        />

        <DrawerMenuItem
          icon={active === 'Projects' ? svgs.green.box : svgs.grey.box}
          itemText={'Projects'}
          textColor={active === 'Projects' ? Colors.icon : Colors.font.darkGrey}
          onPressIn={() => onPressInMenuItem('Projects')}
          onPressOut={onPressOutMenuItem}
        />

        <DrawerMenuItem
          icon={active === 'Message' ? svgs.green.message : svgs.grey.message}
          itemText={'Message'}
          notificationMessage={'15 New'}
          textColor={active === 'Message' ? Colors.icon : Colors.font.darkGrey}
          onPressIn={() => onPressInMenuItem('Message')}
          onPressOut={onPressOutMenuItem}
        />

        <DrawerMenuItem
          icon={active === 'Help Video' ? svgs.green.video : svgs.grey.video}
          itemText={'Help Video'}
          textColor={
            active === 'Help Video' ? Colors.icon : Colors.font.darkGrey
          }
          onPressIn={() => onPressInMenuItem('Help Video')}
          onPressOut={onPressOutMenuItem}
        />

        <DrawerMenuItem
          icon={active === 'Share' ? svgs.green.share : svgs.grey.share}
          itemText={'Share'}
          textColor={active === 'Share' ? Colors.icon : Colors.font.darkGrey}
          onPressIn={() => onPressInMenuItem('Share')}
          onPressOut={onPressOutMenuItem}
        />

        <DrawerMenuItem
          icon={
            active === 'RateApp' ? svgs.green.favourites : svgs.grey.favourites
          }
          itemText={'RateApp'}
          textColor={active === 'RateApp' ? Colors.icon : Colors.font.darkGrey}
          onPressIn={() => onPressInMenuItem('RateApp')}
          onPressOut={onPressOutMenuItem}
        />
      </View>

      <View style={styles.bottomMenu}>
        <DrawerMenuItem
          icon={
            active === 'Contact Us' ? svgs.green.helpdesk : svgs.grey.helpdesk
          }
          itemText={'Contact Us'}
          textColor={
            active === 'Contact Us' ? Colors.icon : Colors.font.darkGrey
          }
          onPressIn={() => onPressInMenuItem('Contact Us')}
          onPressOut={onPressOutMenuItem}
        />

        <DrawerMenuItem
          icon={
            active === 'Settings' ? svgs.green.settings : svgs.grey.settings
          }
          itemText={'Settings'}
          textColor={active === 'Settings' ? Colors.icon : Colors.font.darkGrey}
          onPressIn={() => onPressInMenuItem('Settings')}
          onPressOut={onPressOutMenuItem}
        />
      </View>
    </View>
  );
};
