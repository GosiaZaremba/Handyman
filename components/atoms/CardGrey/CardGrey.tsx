import React from 'react';
import {View} from 'react-native';
import styles from './CardGrey.styles';

export type Props = {
  children: any;
};

export const CardGrey: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
