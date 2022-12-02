import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonGreenIcon} from './ButtonGreenIcon';
import {text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/ButtonGreenIcon', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonGreenIcon
      buttonText={text('button text', 'Button')}
      onPress={action('green button click')}
      iconName={'arrowright'}
    />
  ));
