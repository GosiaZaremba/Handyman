import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {PasswordInputLabel} from './PasswordInputLabel';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/PasswordInputLabel', module)
  .addDecorator(story => story())
  .add('default', () => (
    <PasswordInputLabel labelText={text('label text', 'PASSWORD')} />
  ));
