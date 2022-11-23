import React from 'react';
import {View, ImageBackground} from 'react-native';
import {ProfilePhoto} from '../../atoms';
import {SignInForm, SignInTop} from '../../organisms';
import styles from './SignInTemplate.styles';

export type Props = {
  onPressSignIn: (email?: string, password?: string) => void;
  onPressForgotPassword: () => void;
  onPressSignUp: () => void;
  photo: string;
};

export const SignInTemplate: React.FC<Props> = ({
  onPressSignIn,
  onPressForgotPassword,
  onPressSignUp,
  photo,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/02_Login.png')}
      resizeMode={'cover'}>
      <View style={styles.profilePhoto}>
        <SignInTop welcomeText={'Welcome back!'} />
        <ProfilePhoto photoUrl={photo} />
      </View>
      <SignInForm
        onPressSignIn={onPressSignIn}
        onPressForgotPassword={onPressForgotPassword}
        onPressSignUp={onPressSignUp}
      />
    </ImageBackground>
  );
};
