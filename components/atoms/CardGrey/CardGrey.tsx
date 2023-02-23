import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './CardGrey.styles';

export type Props = {
  children?: ReactNode;
  testID?: string;
};

export const CardGrey: React.FC<Props> = ({children, testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      {children}
    </View>
  );
};
