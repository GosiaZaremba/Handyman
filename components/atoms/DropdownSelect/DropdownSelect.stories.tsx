import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DropdownSelect} from './DropdownSelect';

storiesOf('atoms/DropdownSelect', module)
  .addDecorator(story => story())
  .add('default', () => <DropdownSelect />);
