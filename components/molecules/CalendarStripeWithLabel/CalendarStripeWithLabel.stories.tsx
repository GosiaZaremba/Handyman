import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CalendarStripeWithLabel} from './CalendarStripeWithLabel';

storiesOf('molecules/CalendarStripeWithLabel', module)
  .addDecorator(story => story())
  .add('default', () => <CalendarStripeWithLabel />);
