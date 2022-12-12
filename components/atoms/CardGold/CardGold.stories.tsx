import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CardGold} from './CardGold';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/CardGold', module)
  .addDecorator(story => story())
  .add('default', () => <CardGold children={''} />);
