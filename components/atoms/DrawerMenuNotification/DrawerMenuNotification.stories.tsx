import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerMenuNotification} from './DrawerMenuNotification';

storiesOf('atoms/DrawerMenuNotification', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerMenuNotification notificationMessage={'15 New'} />
  ));
