import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerMenuNotification} from './DrawerMenuNotification';
import {text} from '@storybook/addon-knobs';
import {Colors} from '../../../constants/colors';

storiesOf('atoms/DrawerMenuNotification', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerMenuNotification notificationMessage={'15 New'} />
  ));
