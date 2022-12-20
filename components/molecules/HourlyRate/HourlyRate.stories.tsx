import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HourlyRate} from './HourlyRate';

storiesOf('molecules/HourlyRate', module)
  .addDecorator(story => story())
  .add('default', () => <HourlyRate hourlyRate={75} />);
