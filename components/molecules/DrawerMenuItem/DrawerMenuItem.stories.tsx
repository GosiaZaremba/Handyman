import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerMenuItem} from './DrawerMenuItem';
import {text} from '@storybook/addon-knobs';
import {Colors} from '../../../constants/colors';
import svgs from '../../../assets/svgs/svgs';

storiesOf('molecules/DrawerMenuItem', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerMenuItem
      icon={svgs.grey.box}
      itemText={'Projects'}
      notificationMessage={'15 New'}
    />
  ));
