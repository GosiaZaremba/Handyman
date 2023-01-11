import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextArea} from './TextArea';

storiesOf('atoms/TextArea', module)
  .addDecorator(story => story())
  .add('default', () => <TextArea placeholder={'Placeholder'} />);
