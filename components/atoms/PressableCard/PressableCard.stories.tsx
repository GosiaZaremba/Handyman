import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {PressableCard} from './PressableCard';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/PressableCard', module)
  .addDecorator(story => story())
  .add('default', () => <PressableCard onPress={action('card click')} />);
