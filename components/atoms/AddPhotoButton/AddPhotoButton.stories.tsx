import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AddPhotoButton} from './AddPhotoButton';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/AddPhotoButton', module)
  .addDecorator(story => story())
  .add('default', () => <AddPhotoButton />);
