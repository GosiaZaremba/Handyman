import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Pressable} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './AddPhotoButton.styles';

export type Props = {
  onPress: () => void;
};

export const AddPhotoButton: React.FC<Props> = ({onPress}) => {
  const appImagePickerReference = React.createRef();

  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
      onPress={onPress}>
      <Icon name={'pluscircle'} style={styles.buttonIcon}></Icon>
    </Pressable>
  );
};
