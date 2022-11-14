import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextSmall} from './TextSmall';

storiesOf('atoms/TextSmall', module)
  .addDecorator(story => story())
  .add('default', () => <TextSmall text={'Small Text'} fontColor={'#000'} />);
