import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DropdownSelect} from './DropdownSelect';

storiesOf('atoms/DropdownSelect', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DropdownSelect
      selectOptions={[
        {label: '1 hour', value: 1},
        {label: '2 hours', value: 2},
        {label: '3 hours', value: 3},
        {label: '4 hours', value: 4},
        {label: '5 hours', value: 5},
      ]}
    />
  ));
