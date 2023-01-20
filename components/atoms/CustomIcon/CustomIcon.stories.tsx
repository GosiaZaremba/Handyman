import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CustomIcon} from './CustomIcon';

storiesOf('atoms/CustomIcon', module)
  .addDecorator(story => story())
  .add('default', () => <CustomIcon />);
