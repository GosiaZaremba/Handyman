import React from 'react';
import {ImageBackground} from 'react-native';
import {CategoryMenu} from '../../organisms';
import styles from './PickAHandymanTemplate.styles';

export type Props = {};

export const PickAHandymanTemplate: React.FC<Props> = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/05_top.png')}
      resizeMode={'cover'}>
      <CategoryMenu />
    </ImageBackground>
  );
};
