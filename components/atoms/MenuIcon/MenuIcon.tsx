import React from 'react';
import {Image} from 'react-native';
import styles from './MenuIcon.styles';

export type Props = {
  iconType: any;
};

export const MenuIcon: React.FC<Props> = ({iconType}) => {
  return <Image source={iconType} style={styles.image} />;
};
