import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {WelcomeTemplate} from './WelcomeTemplate';
import {action} from '@storybook/addon-actions';

storiesOf('templates/WelcomeTemplate', module)
  .addDecorator(story => story())
  .add('default', () => (
    <WelcomeTemplate onPressGetStarted={action('WelcomeTemplate ckick')} />
  ));
