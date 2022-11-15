import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Link} from './Link';
import {Colors} from '../../../constants/colors';
import {text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/Link', module)
  .addDecorator(story => story())
  .add('default', () => (
    <Link
      text={text('link text', 'Some link?')}
      onPress={action('link-click')}
      fontColor={Colors.font.green}
    />
  ));
