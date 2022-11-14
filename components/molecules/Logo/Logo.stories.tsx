import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Logo} from './Logo';

storiesOf('molecules/Logo', module)
  .addDecorator(story => story())
  .add('default', () => <Logo />);
