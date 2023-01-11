import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextAreaWithLabel} from './TextAreaWithLabel';
import {Colors} from '../../../constants/colors';
import {text} from '@storybook/addon-knobs';

storiesOf('molecules/TextAreaWithLabel', module)
  .addDecorator(story => story())
  .add('default', () => (
    <TextAreaWithLabel
      labelText={text('label text', 'REASON FOR HIRE')}
      placeholder={text('placeholder', 'Type your reason here')}
      fontColor={Colors.font.darkGrey}
    />
  ));
