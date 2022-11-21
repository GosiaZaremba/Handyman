import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AddAccountButton} from './AddAccountButton';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/AddAccountButton', module)
  .addDecorator(story => story())
  .add('default', () => (
    <AddAccountButton onPress={action('Add new Account')} />
  ));
