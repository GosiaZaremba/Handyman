import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {PickAHandymanTemplate} from './PickAHandymanTemplate';

storiesOf('templates/PickAHandymanTemplate', module)
  .addDecorator(story => story())
  .add('default', () => <PickAHandymanTemplate />);
