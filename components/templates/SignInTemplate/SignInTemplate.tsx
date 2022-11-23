import React from 'react';
import {View, ImageBackground} from 'react-native';
import {ProfilePhoto} from '../../atoms';
import {SignInForm, SignInTop} from '../../organisms';
import styles from './SignInTemplate.styles';

export type Props = {
  onPressSignIn: (email?: string, password?: string) => void;
  onPressForgotPassword: () => void;
  onPressSignUp: () => void;
};

export const SignInTemplate: React.FC<Props> = ({
  onPressSignIn,
  onPressForgotPassword,
  onPressSignUp,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/02_Login.png')}
      resizeMode={'cover'}>
      <View style={styles.profilePhoto}>
        <SignInTop welcomeText={'Welcome back!'} />
        <ProfilePhoto
          photoUrl={require('../../../assets/jpg/profile_photo.jpg')}
        />
      </View>
      <SignInForm
        onPressSignIn={onPressSignIn}
        onPressForgotPassword={onPressForgotPassword}
        onPressSignUp={onPressSignUp}
      />
    </ImageBackground>
  );
};
