import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CategoryMenu} from './CategoryMenu';
import {action} from '@storybook/addon-actions';

storiesOf('organisms/CategoryMenu', module)
  .addDecorator(story => story())
  .add('default', () => <CategoryMenu />);
