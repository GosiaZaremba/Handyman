import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CardGrey} from './CardGrey';

storiesOf('atoms/CardGrey', module)
  .addDecorator(story => story())
  .add('default', () => <CardGrey />);
