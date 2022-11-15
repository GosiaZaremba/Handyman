import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonGreen} from './ButtonGreen';

storiesOf('atoms/ButtonGreen', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonGreen buttonText={'Button Text'} onPress={() => {}} />
  ));
