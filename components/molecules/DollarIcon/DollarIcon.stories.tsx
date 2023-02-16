import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DollarIcon} from './DollarIcon';

storiesOf('molecules/DollarIcon', module)
  .addDecorator(story => story())
  .add('default', () => <DollarIcon />);
