import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerContent} from './DrawerContent';
import {Colors} from '../../../constants/colors';
import {text} from '@storybook/addon-knobs';

storiesOf('organisms/DrawerContent', module)
  .addDecorator(story => story())
  .add('default', () => <DrawerContent />);
