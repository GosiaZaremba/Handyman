import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {CustomIcon} from './CustomIcon';
import svgs from '../../../assets/svgs/svgs';

storiesOf('atoms/CustomIcon', module)
  .addDecorator(story => story())
  .add('default', () => <CustomIcon icon={svgs.grey.box} />);
