import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {InputLabel} from './InputLabel';
import {text} from '@storybook/addon-knobs';

storiesOf('molecules/InputLabel', module)
  .addDecorator(story => story())
  .add('default', () => <InputLabel labelText={text('label', 'USER NAME')} />);
