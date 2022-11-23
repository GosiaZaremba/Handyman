import React, {useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {ButtonGreen, Link, TextSmall} from '../../atoms';
import {
  InputLabel,
  InputLabelReference,
  PasswordInputLabel,
  PasswordInputLabelReference,
} from '../../molecules';
import styles from './SignUpForm.styles';

export type Props = {
  onPressSignUp: (fullName?: string, email?: string, password?: string) => void;
};

export const SignUpForm: React.FC<Props> = ({onPressSignUp}) => {
  const fullNameInputReference = useRef<InputLabelReference>(null);
  const emailInputReference = useRef<InputLabelReference>(null);
  const passwordInputReference = useRef<PasswordInputLabelReference>(null);

  const onSubmitForm = () => {
    const fullNameValue = fullNameInputReference.current?.getValue();
    const emailValue = emailInputReference.current?.getValue();
    const passwordValue = passwordInputReference.current?.getValue();

    if (emailValue && passwordValue) {
      onPressSignUp(fullNameValue, emailValue, passwordValue);
    } else {
      onPressSignUp('', '');
    }
  };

  return (
    <View style={styles.formContainer}>
      <InputLabel labelText={'FULL NAME'} ref={fullNameInputReference} />
      <InputLabel labelText={'EMAIL'} ref={emailInputReference} />
      <PasswordInputLabel labelText={'PASSWORD'} ref={passwordInputReference} />
      <ButtonGreen buttonText={'Sign Up'} onPress={onSubmitForm} />
    </View>
  );
};
