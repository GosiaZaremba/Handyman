import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymanAppointmentCard} from './HandymanAppointmentCard';
import {action} from '@storybook/addon-actions';
import {boolean, text, number} from '@storybook/addon-knobs';

storiesOf('organisms/HandymanAppointmentCard', module)
  .addDecorator(story => story())
  .add('default', () => (
    <HandymanAppointmentCard
      photoUrl={require('../../../assets/jpg/profile_photo.jpg')}
      isOnline={boolean('is handyman online?', true)}
      handymanName={text('handyman name', 'Harry Edward')}
      ratingNumber={number('rating number', 4)}
      starRating={number('number of gold stars', 4)}
      numberOfReviews={number('number of reviews', 43)}
      subCategories={['Cleaning', 'Home Cleaning', 'Office Cleaning']}
      hourlyRate={75}
    />
  ));
