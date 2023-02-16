import React, {useRef, useImperativeHandle, forwardRef, useState} from 'react';
import {Alert, ImageSourcePropType, View} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {ProfilePhoto, AddPhotoButton} from '../../atoms';
import styles from './ProfilePhotoWithButton.styles';

export type ProfilePhotoWithButtonReference = {
  getValue: () => void;
};

export const ProfilePhotoWithButtonAndReference: React.ForwardRefRenderFunction<
  ProfilePhotoWithButtonReference
> = ({}, ref) => {
  const [photo, setPhoto] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/jpg/profile_photo.jpg'),
  );
  const profilePhotoReference = useRef<ProfilePhotoWithButtonReference>(null);

  const onPressAddPhoto = () => {
    ImageCropPicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      ref: profilePhotoReference,
    })
      .then(image => {
        setPhoto({uri: image.path});
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED')
          Alert.alert(`You did't pick any photo.`, 'Please, try again.');
      });
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return photo || null;
    },
  }));
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <ProfilePhoto photoUrl={photo} />
      </View>

      <AddPhotoButton onPress={onPressAddPhoto} />
    </View>
  );
};

export const ProfilePhotoWithButton = forwardRef(
  ProfilePhotoWithButtonAndReference,
);
