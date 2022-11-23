import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignUpForm} from './SignUpForm';
import {action} from '@storybook/addon-actions';

storiesOf('organisms/SignUpForm', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SignUpForm onPressSignUp={action('Signing up with button')} />
  ));
