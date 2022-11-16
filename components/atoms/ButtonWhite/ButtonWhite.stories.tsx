import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonWhite} from './ButtonWhite';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/ButtonWhite', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonWhite
      buttonText={text('button text', 'Button')}
      onPress={action('white button click')}
    />
  ));
