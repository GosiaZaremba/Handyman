import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {AddPhotoButton} from './AddPhotoButton';

storiesOf('atoms/AddPhotoButton', module)
  .addDecorator(story => story())
  .add('default', () => (
    <AddPhotoButton
      onPress={() => {
        console.log('button atom');
      }}
    />
  ));
