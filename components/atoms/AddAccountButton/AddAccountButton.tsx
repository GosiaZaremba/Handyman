import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './AddaCCountButton.styles';

export type Props = {onPress: () => void};

export const AddAccountButton: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
      onPress={onPress}>
      <Icon name={'pluscircle'} style={styles.buttonIcon}></Icon>
    </Pressable>
  );
};
