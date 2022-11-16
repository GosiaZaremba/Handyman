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
import styles from './SignInForm.styles';

export type Props = {
  onPressSignIn: (email?: string, password?: string) => void;
  onPressForgotPassword: () => void;
  onPressSignUp: () => void;
};

export const SignInForm: React.FC<Props> = ({
  onPressSignIn,
  onPressForgotPassword,
  onPressSignUp,
}) => {
  const emailInputReference = useRef<InputLabelReference>(null);
  const passwordInputReference = useRef<PasswordInputLabelReference>(null);

  const onSubmitForm = () => {
    const emailValue = emailInputReference.current?.getValue();
    const passwordValue = passwordInputReference.current?.getValue();

    if (emailValue && passwordValue) {
      onPressSignIn(emailValue, passwordValue);
    } else {
      onPressSignIn('', '');
    }
  };

  return (
    <View style={styles.formContainer}>
      <InputLabel labelText={'USER NAME'} ref={emailInputReference} />
      <PasswordInputLabel labelText={'PASSWORD'} ref={passwordInputReference} />
      <Link
        text={'Forgot Password?'}
        onPress={onPressForgotPassword}
        fontColor={Colors.font.green}
      />
      <ButtonGreen buttonText={'Sign In'} onPress={onSubmitForm} />
      <View style={styles.bottomTextContainer}>
        <TextSmall text={'New to Handyman?'} fontColor={Colors.font.grey} />
        <Link
          text={' SignUp'}
          onPress={onPressSignUp}
          fontColor={Colors.font.green}
        />
      </View>
    </View>
  );
};
