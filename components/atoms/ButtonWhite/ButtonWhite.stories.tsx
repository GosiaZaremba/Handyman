import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonWhite} from './ButtonWhite';

storiesOf('atoms/ButtonWhite', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonWhite buttonText={'Button Text'} onPress={() => {}} />
  ));
