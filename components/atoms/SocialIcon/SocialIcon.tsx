import React from 'react';
import {Pressable} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './SocialIcon.styles';

export type Props = {
  onPress: () => void;
  iconName: string;
  iconColor: string;
};

export const SocialIcon: React.FC<Props> = ({onPress, iconName, iconColor}) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
      onPress={onPress}
      hitSlop={5}>
      <FontAwesome5Icon
        name={iconName}
        style={[styles.icon, {color: iconColor}]}
      />
    </Pressable>
  );
};

// 'twitter-square'
// 'facebook-square'
// 'google-plus-square'
