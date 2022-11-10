import React from 'react';
import {Image} from 'react-native';
import styles from './LogoImage.styles';

export const LogoImage: React.FC = () => {
  return (
    <Image
      source={require('../../../assets/01_logo_cut.png')}
      style={styles.logo}
    />
  );
};
