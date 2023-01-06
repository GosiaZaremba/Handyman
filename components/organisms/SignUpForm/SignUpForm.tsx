import React, {useRef} from 'react';
import {View} from 'react-native';
import {ButtonGreen} from '../../atoms';
import {
  InputLabel,
  InputLabelReference,
  PasswordInputLabel,
  PasswordInputLabelReference,
  ProfilePhotoWithButton,
  ProfilePhotoWithButtonReference,
} from '../../molecules';
import {SignInTop} from '../../organisms';
import styles from './SignUpForm.styles';

export type Props = {
  onPressSignUp: (
    fullName?: string,
    email?: string,
    password?: string,
    photoValue?: any,
  ) => void;
};

export const SignUpForm: React.FC<Props> = ({onPressSignUp}) => {
  const fullNameInputReference = useRef<InputLabelReference>(null);
  const emailInputReference = useRef<InputLabelReference>(null);
  const passwordInputReference = useRef<PasswordInputLabelReference>(null);
  const profilePhotoReference = useRef<ProfilePhotoWithButtonReference>(null);

  const onSubmitForm = () => {
    const fullNameValue = fullNameInputReference.current?.getValue();
    const emailValue = emailInputReference.current?.getValue();
    const passwordValue = passwordInputReference.current?.getValue();
    const profilePhotoValue = profilePhotoReference.current?.getValue();

    if (emailValue && passwordValue) {
      onPressSignUp(
        fullNameValue,
        emailValue,
        passwordValue,
        profilePhotoValue,
      );
      console.log(
        'signup form',
        fullNameValue,
        emailValue,
        passwordValue,
        profilePhotoValue,
      );
    } else {
      onPressSignUp('', '', '', null);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.profilePhoto}>
        <SignInTop welcomeText={'Sign up to get started.'} />
        <ProfilePhotoWithButton ref={profilePhotoReference} />
      </View>
      <InputLabel labelText={'FULL NAME'} ref={fullNameInputReference} />
      <InputLabel labelText={'EMAIL'} ref={emailInputReference} />
      <PasswordInputLabel labelText={'PASSWORD'} ref={passwordInputReference} />
      <ButtonGreen buttonText={'Sign Up'} onPress={onSubmitForm} />
    </View>
  );
};
