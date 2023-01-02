import React from 'react';
import {WelcomeTemplate} from '../../templates';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  navigation?: any;
};

export const WelcomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  const onPressGetStarted = () => {
    navigation.navigate('Sign In');
  };

  return <WelcomeTemplate onPressGetStarted={onPressGetStarted} />;
};
