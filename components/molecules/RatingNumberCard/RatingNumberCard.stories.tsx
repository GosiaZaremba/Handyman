import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RatingNumberCard} from './RatingNumberCard';

storiesOf('molecules/RatingNumberCard', module)
  .addDecorator(story => story())
  .add('default', () => <RatingNumberCard ratingNumber={5.0} />);
