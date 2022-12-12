import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymanCard} from './HandymanCard';
import {action} from '@storybook/addon-actions';

storiesOf('organisms/HandymanCard', module)
  .addDecorator(story => story())
  .add('default', () => <HandymanCard />);
