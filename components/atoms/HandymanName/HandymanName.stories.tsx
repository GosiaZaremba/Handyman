import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymanName} from './HandymanName';

storiesOf('atoms/HandymanName', module)
  .addDecorator(story => story())
  .add('default', () => <HandymanName text={'Handyman Name'} />);
