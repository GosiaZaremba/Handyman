import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {PickAHandymanScreen} from './PickAHandymanScreen';
import {action} from '@storybook/addon-actions';

storiesOf('screens/PickAHandymanScreen', module)
  .addDecorator(story => story())
  .add('default', () => <PickAHandymanScreen />);
