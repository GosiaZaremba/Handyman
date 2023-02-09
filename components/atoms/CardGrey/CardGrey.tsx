import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './CardGrey.styles';

export type Props = {
  children?: ReactNode;
};

export const CardGrey: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
