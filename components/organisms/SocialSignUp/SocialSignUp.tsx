import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {SocialIcon} from '../../atoms';
import styles from './SocialSignUp.styles';

export type Props = {
  onPressFacebook: () => void;
  onPressTwitter: () => void;
  onPressGoogle: () => void;
};

export const SocialSignUp: React.FC<Props> = ({
  onPressFacebook,
  onPressTwitter,
  onPressGoogle,
}) => {
  return (
    <View style={styles.outerContainer}>
      <SocialIcon
        iconName={'facebook-square'}
        iconColor={Colors.icons.facebook}
        onPress={onPressFacebook}
      />
      <SocialIcon
        iconName={'twitter-square'}
        iconColor={Colors.icons.twitter}
        onPress={onPressTwitter}
      />
      <SocialIcon
        iconName={'google-plus-square'}
        iconColor={Colors.icons.google}
        onPress={onPressGoogle}
      />
    </View>
  );
};

// 'twitter-square'
// 'facebook-square'
// 'google-plus-square'
