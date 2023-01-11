import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CalendarStripeWithLabel} from './CalendarStripeWithLabel';
import {text} from '@storybook/addon-knobs';
import {Colors} from '../../../constants/colors';

storiesOf('molecules/CalendarStripeWithLabel', module)
  .addDecorator(story => story())
  .add('default', () => (
    <CalendarStripeWithLabel
      iconName={'calendar-o'}
      iconColor={Colors.calendar}
      iconSize={16}
      labelText={text('labelText', 'SELECT DATE   ')}
    />
  ));
