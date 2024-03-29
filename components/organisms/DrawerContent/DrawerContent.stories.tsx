import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerContent} from './DrawerContent';
import data from '../../../assets/data/handymen';

storiesOf('organisms/DrawerContent', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerContent
      photoUrl={data[0].photo}
      userName={data[0].name}
      userLocation={'Melbourne, Australia'}
    />
  ));
