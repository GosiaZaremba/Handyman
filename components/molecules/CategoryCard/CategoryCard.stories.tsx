import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CategoryCard} from './CategoryCard';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('molecules/CategoryCard', module)
  .addDecorator(story => story())
  .add('default', () => <CategoryCard text={text('card text', 'Card Text')} />);
