import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonCategory} from './ButtonCategory';
import {action} from '@storybook/addon-actions';

storiesOf('atoms/ButtonCategory', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonCategory
      onPress={action('white button click')}
      categoryIcon={require('../../../assets/png/05_icons_cleaning.png')}
    />
  ));
