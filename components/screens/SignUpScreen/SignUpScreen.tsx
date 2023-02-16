import React from 'react';
import {SignUpTemplate} from '../../templates';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../App';
import {ImageSourcePropType} from 'react-native';

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const onPressSignUp = (
    fullName?: string,
    email?: string,
    password?: string,
    photoValue?: ImageSourcePropType | undefined,
  ) => {
    console.log('SignInScreen', fullName, email, password, photoValue);
    navigation.navigate('PickAHandyman');
  };
  const onPressFacebook = () => {
    console.log('Log in with Facebook');
  };
  const onPressTwitter = () => {
    console.log('Log in with Twitter');
  };

  const onPressGoogle = () => {
    console.log('Log in with Google');
  };

  const onPressGoToSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SignUpTemplate
      onPressSignUp={onPressSignUp}
      onPressFacebook={onPressFacebook}
      onPressTwitter={onPressTwitter}
      onPressGoogle={onPressGoogle}
      onPressGoToSignIn={onPressGoToSignIn}
    />
  );
};
