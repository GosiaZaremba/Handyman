import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CardGold} from './CardGold';

storiesOf('atoms/CardGold', module)
  .addDecorator(story => story())
  .add('default', () => <CardGold />);
