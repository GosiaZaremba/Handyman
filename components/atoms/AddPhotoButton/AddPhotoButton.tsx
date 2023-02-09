import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './AddPhotoButton.styles';

export type Props = {
  onPress: () => void;
};

export const AddPhotoButton: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
      onPress={onPress}>
      <Icon name={'pluscircle'} style={styles.buttonIcon} />
    </Pressable>
  );
};
