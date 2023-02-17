import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './ButtonWhite.styles';

export type Props = {
  buttonText: string;
  onPress: () => void;
  testID?: string;
  testOnly_pressed?: boolean;
};

export const ButtonWhite: React.FC<Props> = ({
  buttonText,
  onPress,
  testID,
  testOnly_pressed,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
        onPress={onPress}
        testID={testID}
        testOnly_pressed={testOnly_pressed}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};
