import React from 'react';
import {View} from 'react-native';
import {LogoImage} from '../../atoms/LogoImage/LogoImage';
import styles from './Logo.styles';

export const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoImage />
    </View>
  );
};
