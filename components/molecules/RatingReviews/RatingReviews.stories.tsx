import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RatingReviews} from './RatingReviews';
import {number} from '@storybook/addon-knobs';

storiesOf('molecules/RatingReviews', module)
  .addDecorator(story => story())
  .add('default', () => (
    <RatingReviews
      ratingNumber={number('rating number', 4)}
      numberOfReviews={number('number of reviews', 53)}
      starRating={number('number of gold stars', 4)}
    />
  ));
