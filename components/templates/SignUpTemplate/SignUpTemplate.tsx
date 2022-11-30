import React from 'react';
import {View, ImageBackground} from 'react-native';
import {Colors} from '../../../constants/colors';
import {Link, TextSmall} from '../../atoms';
import {ProfilePhotoWithButton} from '../../molecules';
import {SignUpForm, SignInTop, SocialSignUp} from '../../organisms';
import styles from './SignUpTemplate.styles';

export type Props = {
  onPressSignUp: (email?: string, password?: string) => void;
  onPressFacebook: () => void;
  onPressTwitter: () => void;
  onPressGoogle: () => void;
  onPressGoToSignIn: () => void;
};

export const SignUpTemplate: React.FC<Props> = ({
  onPressSignUp,
  onPressFacebook,
  onPressTwitter,
  onPressGoogle,
  onPressGoToSignIn,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/02_Login.png')}
      resizeMode={'cover'}>
      <View style={styles.formContainer}>
        <SignUpForm onPressSignUp={onPressSignUp} />
      </View>
      <View>
        <TextSmall text="Or sign in with" fontColor={Colors.font.grey} />
        <SocialSignUp
          onPressFacebook={onPressFacebook}
          onPressTwitter={onPressTwitter}
          onPressGoogle={onPressGoogle}
        />
      </View>
      <View style={styles.footer}>
        <TextSmall
          text="Already have an account? "
          fontColor={Colors.font.grey}
        />
        <Link
          text={'Sign In'}
          onPress={onPressGoToSignIn}
          fontColor={Colors.font.green}
        />
      </View>
    </ImageBackground>
  );
};
