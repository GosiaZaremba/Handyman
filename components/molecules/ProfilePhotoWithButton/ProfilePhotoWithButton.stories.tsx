import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ProfilePhotoWithButton} from './ProfilePhotoWithButton';

storiesOf('molecules/ProfilePhotoWithButton', module)
  .addDecorator(story => story())
  .add('default', () => <ProfilePhotoWithButton />);
