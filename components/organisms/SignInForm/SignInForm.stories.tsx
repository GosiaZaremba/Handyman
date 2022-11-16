import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignInForm} from './SignInForm';
import {action} from '@storybook/addon-actions';

storiesOf('organisms/SignInForm', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SignInForm onPressSignIn={action('Form Sign In click')} />
  ));
