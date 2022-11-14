import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './ButtonWhite.styles';

export type Props = {
  buttonText: string;
  onPress: () => void;
};

export const ButtonWhite: React.FC<Props> = ({buttonText, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};
