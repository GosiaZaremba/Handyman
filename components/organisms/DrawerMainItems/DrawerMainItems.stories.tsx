import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerMainItems} from './DrawerMainItems';

storiesOf('organisms/DrawerMainItems', module)
  .addDecorator(story => story())
  .add('default', () => <DrawerMainItems isMenuItemPressed={false} />);
