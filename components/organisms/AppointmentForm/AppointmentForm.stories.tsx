import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AppointmentForm} from './AppointmentForm';

storiesOf('organisms/AppointmentForm', module)
  .addDecorator(story => story())
  .add('default', () => (
    <AppointmentForm
      sendAppointmentForm={() => {
        console.log('click');
      }}
      onPressPrevious={() => {
        console.log('click');
      }}
    />
  ));
