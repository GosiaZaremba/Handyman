import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {NavigationProp} from '../../../App';
import {SignInTemplate} from '../../templates';
import data from '../../../assets/data/handymen.js';

export const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const photo = data[5].photo.uri;
  const onPressSignIn = (email?: string, password?: string) => {
    console.log('SignInScreen', email, password);
    navigation.navigate('PickAHandyman');
  };
  const onPressForgotPassword = () => {
    console.log('Sending forgot password email');
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SignInTemplate
      onPressSignIn={onPressSignIn}
      onPressForgotPassword={onPressForgotPassword}
      onPressSignUp={onPressSignUp}
      photo={photo}
    />
  );
};
