import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {OffButton} from './OffButton';

storiesOf('molecules/OffButton', module)
  .addDecorator(story => story())
  .add('default', () => <OffButton />);
