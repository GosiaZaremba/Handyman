import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './ButtonGreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';

export type Props = {
  buttonText: string;
  onPress: () => void;
};

export const ButtonGreen: React.FC<Props> = ({buttonText, onPress}) => {
  return (
    <LinearGradient
      colors={[Colors.button.light, Colors.button.dark]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.pressable}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </LinearGradient>
  );
};
