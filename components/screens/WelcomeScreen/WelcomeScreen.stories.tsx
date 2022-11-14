import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {WelcomeScreen} from './WelcomeScreen';

storiesOf('screens/WelcomeScreen', module)
  .addDecorator(story => story())
  .add('default', () => <WelcomeScreen />);
