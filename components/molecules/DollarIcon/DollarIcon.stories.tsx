import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DollarIcon} from './DollarIcon';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('molecules/DollarIcon', module)
  .addDecorator(story => story())
  .add('default', () => <DollarIcon />);
