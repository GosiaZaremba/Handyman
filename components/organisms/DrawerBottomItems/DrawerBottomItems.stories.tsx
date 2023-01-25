import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerBottomItems} from './DrawerBottomItems';
import {Colors} from '../../../constants/colors';
import {text} from '@storybook/addon-knobs';

storiesOf('organisms/DrawerBottomItems', module)
  .addDecorator(story => story())
  .add('default', () => <DrawerBottomItems isMenuItemPressed={true} />);
