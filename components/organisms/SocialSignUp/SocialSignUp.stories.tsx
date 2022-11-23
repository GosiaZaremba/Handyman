import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SocialSignUp} from './SocialSignUp';
import {action} from '@storybook/addon-actions';

storiesOf('organisms/SocialSignUp', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SocialSignUp
      onPressFacebook={action('Signing up with Facebook')}
      onPressTwitter={action('Signing up with Twitter')}
      onPressGoogle={action('Signing up with Google')}
    />
  ));
