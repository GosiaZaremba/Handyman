import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignUpTemplate} from './SignUpTemplate';
import {action} from '@storybook/addon-actions';

storiesOf('templates/SignUpTemplate', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SignUpTemplate
      onPressSignUp={action('Signing up')}
      onPressFacebook={action('Signing in with Facebook')}
      onPressTwitter={action('Signing in with Twitter')}
      onPressGoogle={action('Signing in with Google')}
      onPressGoToSignIn={action('Go to SignInScreen')}
    />
  ));
