import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerScreen} from './DrawerScreen';

storiesOf('screens/DrawerScreen', module)
  .addDecorator(story => story())
  .add('default', () => <DrawerScreen />);
