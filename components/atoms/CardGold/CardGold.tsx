import React, {ReactNode} from 'react';
import styles from './CardGold.styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

export type Props = {
  children?: ReactNode;
  testID?: string;
};

export const CardGold: React.FC<Props> = ({children, testID}) => {
  return (
    <LinearGradient
      colors={[Colors.gold.light, Colors.gold.dark]}
      start={{x: 1, y: 0.5}}
      end={{x: 0, y: 0.5}}
      style={styles.container}
      testID={testID}>
      {children}
    </LinearGradient>
  );
};
