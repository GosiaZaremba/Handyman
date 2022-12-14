import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextSmall} from './TextSmall';
import {text, color} from '@storybook/addon-knobs';

storiesOf('atoms/TextSmall', module)
  .addDecorator(story => story())
  .add('default', () => (
    <TextSmall
      text={text('text', 'Small Text')}
      fontColor={color('font color', '#000')}
    />
  ));
