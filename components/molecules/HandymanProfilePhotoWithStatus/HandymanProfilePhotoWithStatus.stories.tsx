import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymanProfilePhotoWithStatus} from './HandymanProfilePhotoWithStatus';

storiesOf('molecules/HandymanProfilePhotoWithStatus', module)
  .addDecorator(story => story())
  .add('default', () => (
    <HandymanProfilePhotoWithStatus
      photoUrl={require('../../../assets/jpg/profile_photo.jpg')}
      isOnline={true}
    />
  ));
