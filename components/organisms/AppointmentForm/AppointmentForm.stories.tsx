import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AppointmentForm} from './AppointmentForm';
import {Colors} from '../../../constants/colors';
import {text} from '@storybook/addon-knobs';

storiesOf('organisms/AppointmentForm', module)
  .addDecorator(story => story())
  .add('default', () => (
    <AppointmentForm
      sendAppointmentForm={() => {
        console.log('click');
      }}
    />
  ));
