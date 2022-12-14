import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {SubCategoryList} from './SubCategoryList';

storiesOf('molecules/SubCategoryList', module)
  .addDecorator(story => story())
  .add('default', () => (
    <SubCategoryList
      subCategories={['Cleaning', 'Home Cleaning', 'Office Cleaning']}
    />
  ));
