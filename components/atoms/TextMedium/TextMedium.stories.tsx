import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextMedium} from './TextMedium';
import {text, color} from '@storybook/addon-knobs';

storiesOf('atoms/TextMedium', module)
  .addDecorator(story => story())
  .add('default', () => (
    <TextMedium
      text={text('displayed text', 'Large Text')}
      fontColor={color('font color', '#000')}
    />
  ));
