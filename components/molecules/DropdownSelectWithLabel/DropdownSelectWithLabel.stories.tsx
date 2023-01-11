import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DropdownSelectWithLabel} from './DropdownSelectWithLabel';
import {text} from '@storybook/addon-knobs';
import {Colors} from '../../../constants/colors';

const selectOptions = [
  {label: '1 hour', value: 1},
  {label: '2 hours', value: 2},
  {label: '3 hours', value: 3},
  {label: '4 hours', value: 4},
  {label: '5 hours', value: 5},
];

storiesOf('molecules/DropdownSelectWithLabel', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DropdownSelectWithLabel
      selectOptions={selectOptions}
      labelTextLarge={text('labelTextLarge', 'SELECT HOURS   ')}
      labelTextSmall={text('labelTextSmall', '(of Service you need)')}
      placeholderValue={selectOptions[0].label}
    />
  ));
