import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './CardWhite.styles';

export type Props = {
  children?: ReactNode;
  testID?: string;
};

export const CardWhite: React.FC<Props> = ({children, testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      {children}
    </View>
  );
};
