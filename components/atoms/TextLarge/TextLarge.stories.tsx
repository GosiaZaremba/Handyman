import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextLarge} from './TextLarge';
import {text, color} from '@storybook/addon-knobs';

storiesOf('atoms/TextLarge', module)
  .addDecorator(story => story())
  .add('default', () => (
    <TextLarge
      text={text('displayed text', 'Large Text')}
      fontColor={color('font color', '#000')}
    />
  ));
