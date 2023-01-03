import React from 'react';
import {WelcomeTemplate} from '../../templates';
import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const onPressGetStarted = () => {
    navigation.navigate('SignIn');
  };

  return <WelcomeTemplate onPressGetStarted={onPressGetStarted} />;
};
