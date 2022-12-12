import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymanProfilePhoto} from './HandymanProfilePhoto';

storiesOf('atoms/HandymanProfilePhoto', module)
  .addDecorator(story => story())
  .add('default', () => (
    <HandymanProfilePhoto
      photoUrl={require('../../../assets/jpg/profile_photo.jpg')}
    />
  ));
