import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {FAIcon} from './FAIcon';
import {text} from '@storybook/addon-knobs';
import {Colors} from '../../../constants/colors';

storiesOf('atoms/FAIcon', module)
  .addDecorator(story => story())
  .add('default', () => (
    <FAIcon
      iconName={text('icon name', 'star')}
      iconColor={Colors.star.grey}
      iconSize={18}
    />
  ));
