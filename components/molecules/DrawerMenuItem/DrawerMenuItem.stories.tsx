import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerMenuItem} from './DrawerMenuItem';
import svgs from '../../../assets/svgs/svgs';
import {Colors} from '../../../constants/colors';

storiesOf('molecules/DrawerMenuItem', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerMenuItem
      icon={svgs.grey.box}
      itemText={'Projects'}
      notificationMessage={'15 New'}
      textColor={Colors.font.darkGrey}
      onPressIn={() => console.log('press in')}
      onPressOut={() => console.log('press out')}
    />
  ));
