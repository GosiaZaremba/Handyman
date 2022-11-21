import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ProfilePhotoWithButton} from './ProfilePhotoWithButton';
import {action} from '@storybook/addon-actions';

storiesOf('molecules/ProfilePhotoWithButton', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ProfilePhotoWithButton
      onPress={action('green button click')}
      photoUrl={require('../../../assets/jpg/profile_photo.jpg')}
    />
  ));
