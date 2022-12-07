import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CardGrey} from './CardGrey';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/CardGrey', module)
  .addDecorator(story => story())
  .add('default', () => <CardGrey children={''} />);
