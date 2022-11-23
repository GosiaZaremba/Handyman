import React, {useState} from 'react';
import {SignInTemplate} from '../../templates';

export const SignInScreen: React.FC = () => {
  const [photo, setPhoto] = useState<any>(
    require('../../../assets/jpg/profile_photo.jpg'),
  );
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
      photo={photo}
    />
  );
};
