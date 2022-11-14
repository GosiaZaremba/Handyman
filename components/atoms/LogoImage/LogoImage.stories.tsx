import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {LogoImage} from './LogoImage';

storiesOf('atoms/LogoImage', module)
  .addDecorator(story => story())
  .add('default', () => <LogoImage />);
