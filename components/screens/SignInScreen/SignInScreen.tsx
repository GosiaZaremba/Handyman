import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SignInTemplate} from '../../templates';

export const SignInScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [photo, setPhoto] = useState<any>(
    require('../../../assets/jpg/profile_photo.jpg'),
  );
  const onPressSignIn = (email?: string, password?: string) => {
    console.log('SignInScreen', email, password);
    navigation.navigate('Pick A Handyman');
  };
  const onPressForgotPassword = () => {
    console.log('Sending forgot password email');
  };

  const onPressSignUp = () => {
    navigation.navigate('Sign Up');
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
