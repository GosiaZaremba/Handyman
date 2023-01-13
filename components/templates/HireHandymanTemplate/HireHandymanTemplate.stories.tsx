import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HireHandymanTemplate} from './HireHandymanTemplate';
import {boolean, number, text} from '@storybook/addon-knobs';

storiesOf('templates/HireHandymanTemplate', module)
  .addDecorator(story => story())
  .add('default', () => (
    <HireHandymanTemplate
      sendAppointmentForm={() => {
        console.log();
      }}
      onPressPrevious={() => {
        console.log();
      }}
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
