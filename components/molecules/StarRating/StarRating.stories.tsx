import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StarRating} from './StarRating';

storiesOf('molecules/StarRating', module)
  .addDecorator(story => story())
  .add('default', () => <StarRating starRating={3} />);
