import React from 'react';
import {View} from 'react-native';
import styles from './CardGold.styles';

export type Props = {
  children: any;
};

export const CardGold: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
