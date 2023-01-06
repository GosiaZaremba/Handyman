import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CalendarStripe} from './CalendarStripe';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/CalendarStripe', module)
  .addDecorator(story => story())
  .add('default', () => <CalendarStripe />);
