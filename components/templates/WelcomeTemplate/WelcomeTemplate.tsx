import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './WelcomeTemplate.styles';

export const WelcomeTemplate: React.FC = () => {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        source={require('../../../assets/01_background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"></ImageBackground>
    </View>
  );
};
