import React from 'react';
import {ImageBackground, View} from 'react-native';
import {DrawerMainItems} from '../DrawerMainItems/DrawerMainItems';
import styles from './DrawerContent.styles';

export type Props = {};

export const DrawerContent: React.FC<Props> = ({}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/05_top.png')}
      resizeMode={'cover'}>
      <DrawerMainItems />
    </ImageBackground>
  );
};
