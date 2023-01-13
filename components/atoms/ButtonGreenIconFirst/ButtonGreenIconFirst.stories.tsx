import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonGreenIconFirst} from './ButtonGreenIconFirst';
import {text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/ButtonGreenIconFirst', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonGreenIconFirst
      buttonText={text('button text', 'Button')}
      onPress={action('green button click')}
      iconName={'arrowright'}
    />
  ));
