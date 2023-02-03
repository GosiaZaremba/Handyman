import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerHeader} from './DrawerHeader';
import data from '../../../assets/data/handymen';

storiesOf('organisms/DrawerHeader', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerHeader
      photoUrl={data[0].photo}
      userName={data[0].name}
      userLocation={'Melbourne, Australia'}
    />
  ));
