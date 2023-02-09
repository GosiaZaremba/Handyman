import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {DrawerTemplate} from './DrawerTemplate';
import data from '../../../assets/data/handymen';

storiesOf('templates/DrawerTemplate', module)
  .addDecorator(story => story())
  .add('default', () => (
    <DrawerTemplate
      photoUrl={data[0].photo}
      userName={data[0].name}
      userLocation={'Melbourne, Australia'}
      onPressLogOut={() => {
        console.log('template log out');
      }}
    />
  ));
