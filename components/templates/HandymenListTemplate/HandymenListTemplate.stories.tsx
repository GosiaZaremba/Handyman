import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {HandymenListTemplate} from './HandymenListTemplate';

storiesOf('templates/HandymenListTemplate', module)
  .addDecorator(story => story())
  .add('default', () => (
    <HandymenListTemplate
      onPressChooseHandymanButton={() => {
        console.log('handymen list template stories');
      }}
    />
  ));
