import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ButtonCategory} from './ButtonCategory';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('atoms/ButtonCategory', module)
  .addDecorator(story => story())
  .add('default', () => (
    <ButtonCategory
      onPress={action('white button click')}
      category={require('../../../assets/png/05_icons_cleaning.png')}
      text={text('button text', 'Laundry')}
      isActive={true}
    />
  ));
