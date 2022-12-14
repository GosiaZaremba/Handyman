import React from 'react';
import styles from './CardGold.styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

export type Props = {
  children?: any;
};

export const CardGold: React.FC<Props> = ({children}) => {
  return (
    <LinearGradient
      colors={[Colors.gold.light, Colors.gold.dark]}
      start={{x: 1, y: 0.5}}
      end={{x: 0, y: 0.5}}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};
