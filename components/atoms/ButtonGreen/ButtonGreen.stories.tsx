import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonGreen} from './ButtonGreen';
import {text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/ButtonGreen', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonGreen
      buttonText={text('button text', 'Button')}
      onPress={action('green button click')}
    />
  ));
