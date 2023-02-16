import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './PressableCard.styles';

export type Props = {
  onPress: () => void;
  children?: React.FC;
};

export const PressableCard: React.FC<Props> = ({onPress, children}) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}>
        {children}
      </Pressable>
    </View>
  );
};
