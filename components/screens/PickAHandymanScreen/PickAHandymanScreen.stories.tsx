import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {PickAHandymanScreen} from './PickAHandymanScreen';

storiesOf('screens/PickAHandymanScreen', module)
  .addDecorator(story => story())
  .add('default', () => <PickAHandymanScreen />);
