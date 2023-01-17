import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerTemplate} from './DrawerTemplate';
import {Colors} from '../../../constants/colors';
import {text} from '@storybook/addon-knobs';

storiesOf('templates/DrawerTemplate', module)
  .addDecorator(story => story())
  .add('default', () => <DrawerTemplate />);
