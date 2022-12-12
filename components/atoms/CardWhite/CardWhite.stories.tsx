import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CardWhite} from './CardWhite';

storiesOf('atoms/CardWhite', module)
  .addDecorator(story => story())
  .add('default', () => <CardWhite children={''} />);
