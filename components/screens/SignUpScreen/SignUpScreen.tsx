import React from 'react';
import {SignUpTemplate} from '../../templates';

export const SignUpScreen: React.FC = () => {
  const onPressSignUp = (
    fullName?: string,
    email?: string,
    password?: string,
  ) => {
    console.log('SignInScreen', fullName, email, password);
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

  const onPressAddPhoto = () => {
    console.log('Add photo');
  };

  const onPressGoToSignIn = () => {
    console.log('Going to SignUpScreen');
  };
  return (
    <SignUpTemplate
      onPressSignUp={onPressSignUp}
      onPressAddPhoto={onPressAddPhoto}
      onPressFacebook={onPressFacebook}
      onPressTwitter={onPressTwitter}
      onPressGoogle={onPressGoogle}
      onPressGoToSignIn={onPressGoToSignIn}
    />
  );
};
