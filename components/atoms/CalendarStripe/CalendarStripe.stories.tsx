import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CalendarStripe} from './CalendarStripe';

storiesOf('atoms/CalendarStripe', module)
  .addDecorator(story => story())
  .add('default', () => <CalendarStripe />);
