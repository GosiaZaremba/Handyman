import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymenListTemplate} from './HandymenListTemplate';
import {action} from '@storybook/addon-actions';

storiesOf('templates/HandymenListTemplate', module)
  .addDecorator(story => story())
  .add('default', () => <HandymenListTemplate />);
