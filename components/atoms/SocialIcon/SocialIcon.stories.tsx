import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SocialIcon} from './SocialIcon';
import {action} from '@storybook/addon-actions';
import {text, color} from '@storybook/addon-knobs';
import {Colors} from '../../../constants/colors';

storiesOf('atoms/SocialIcon', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SocialIcon
      onPress={action('Icon click')}
      iconColor={color('icon color', Colors.icons.facebook)}
      iconName={text('icon name', 'facebook-square')}
    />
  ));
