import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CustomPasswordInput} from './CustomPasswordInput';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/CustomPasswordInput', module)
  .addDecorator(story => story())
  .add('default', () => (
    <CustomPasswordInput placeholder={text('placeholder', 'Email')} />
  ));
