import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './AddPhotoButton.styles';

export type Props = {
  onPress: () => void;
  testID?: string;
  testOnly_pressed?: boolean;
};

export const AddPhotoButton: React.FC<Props> = ({
  onPress,
  testID,
  testOnly_pressed,
}) => {
  return (
    <Pressable
      testID={testID}
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
      onPress={onPress}
      testOnly_pressed={testOnly_pressed}>
      <Icon name={'pluscircle'} style={styles.buttonIcon} />
    </Pressable>
  );
};
