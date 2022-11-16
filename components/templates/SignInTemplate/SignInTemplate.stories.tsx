import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignInTemplate} from './SignInTemplate';
import {action} from '@storybook/addon-actions';

storiesOf('templates/SignInTemplate', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SignInTemplate
      onPressSignIn={action('Signing in')}
      onPressForgotPassword={action('Forgot password')}
      onPressSignUp={action('Signing up')}
    />
  ));
