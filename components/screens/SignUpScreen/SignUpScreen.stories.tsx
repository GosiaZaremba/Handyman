import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignUpScreen} from './SignUpScreen';

storiesOf('screens/SignUpScreen', module)
  .addDecorator(story => story())
  .add('default', () => <SignUpScreen />);
