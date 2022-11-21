import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SignInTop} from './SignInTop';

storiesOf('organisms/SignInTop', module)
  .addDecorator(story => story())
  .add('default', () => <SignInTop />);
