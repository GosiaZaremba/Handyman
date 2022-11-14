import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextLarge} from './TextLarge';

storiesOf('atoms/TextLarge', module)
  .addDecorator(story => story())
  .add('default', () => <TextLarge text={'Large Text'} fontColor={'#000'} />);
