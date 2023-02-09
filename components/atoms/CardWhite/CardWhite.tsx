import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './CardWhite.styles';

export type Props = {
  children?: ReactNode;
};

export const CardWhite: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
