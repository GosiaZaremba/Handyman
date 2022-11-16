import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ProfilePhoto} from './ProfilePhoto';

storiesOf('atoms/ProfilePhoto', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ProfilePhoto photoUrl={require('../../../assets/jpg/3.jpg')} />
  ));
