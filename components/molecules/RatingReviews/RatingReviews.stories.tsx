import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RatingReviews} from './RatingReviews';

storiesOf('molecules/RatingReviews', module)
  .addDecorator(story => story())
  .add('default', () => <RatingReviews />);
