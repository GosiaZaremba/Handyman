import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignInScreen} from './SignInScreen';

storiesOf('screens/SignInScreen', module)
  .addDecorator(story => story())
  .add('default', () => <SignInScreen />);
