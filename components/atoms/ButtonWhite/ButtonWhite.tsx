import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './ButtonWhite.styles';

export type Props = {
  buttonText: string;
  onPress: () => void;
};

export const ButtonWhite: React.FC<Props> = ({buttonText, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};
