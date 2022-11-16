import React from 'react';
import {SignInTemplate} from '../../templates';

export const SignInScreen: React.FC = () => {
  const onPressSignIn = (email?: string, password?: string) => {
    console.log('SignInScreen', email, password);
  };
  const onPressForgotPassword = () => {
    console.log('Sending forgot password email');
  };

  const onPressSignUp = () => {
    console.log('Going to SignUpScreen');
  };
  return (
    <SignInTemplate
      onPressSignIn={onPressSignIn}
      onPressForgotPassword={onPressForgotPassword}
      onPressSignUp={onPressSignUp}
    />
  );
};
