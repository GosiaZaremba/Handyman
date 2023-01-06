import React from 'react';
import {WelcomeTemplate} from '../../templates';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../App';

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const onPressGetStarted = () => {
    navigation.navigate('SignIn');
  };

  return <WelcomeTemplate onPressGetStarted={onPressGetStarted} />;
};
