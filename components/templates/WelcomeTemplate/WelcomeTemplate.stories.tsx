import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {WelcomeTemplate} from './WelcomeTemplate';

storiesOf('templates/WelcomeTemplate', module)
  .addDecorator(story => story())
  .add('default', () => <WelcomeTemplate />);
