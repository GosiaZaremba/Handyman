import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {MenuIcon} from './MenuIcon';

storiesOf('atoms/MenuIcon', module)
  .addDecorator(story => story())
  .add('default', () => (
    <MenuIcon iconType={require('../../../assets/05_icons_electrical.png')} />
  ));
