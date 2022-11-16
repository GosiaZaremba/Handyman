import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignInScreen} from './SignInScreen';
import {action} from '@storybook/addon-actions';

storiesOf('screens/SignInScreen', module)
  .addDecorator(story => story())
  .add('default', () => <SignInScreen />);
