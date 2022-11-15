import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Label} from './Label';
import {boolean, text} from '@storybook/addon-knobs';

storiesOf('atoms/Label', module)
  .addDecorator(story => story())
  .add('default', () => <Label text={text('label text', 'LABEL TEXT')} />);
