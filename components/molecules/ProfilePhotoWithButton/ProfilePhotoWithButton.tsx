import React, {useRef, useImperativeHandle, forwardRef, useState} from 'react';
import {View} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {ProfilePhoto, AddPhotoButton} from '../../atoms';
import styles from './ProfilePhotoWithButton.styles';

export type ProfilePhotoWithButtonReference = {
  getValue: () => void;
};

export const ProfilePhotoWithButtonAndReference: React.ForwardRefRenderFunction<
  ProfilePhotoWithButtonReference
> = ({}, ref) => {
  const [photo, setPhoto] = useState<any>(
    require('../../../assets/jpg/profile_photo.jpg'),
  );
  const profilePhotoReference = useRef<ProfilePhotoWithButtonReference>(null);

  const onPressAddPhoto = () => {
    console.log('Add photo');
    ImageCropPicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
      ref: profilePhotoReference,
    }).then(image => {
      setPhoto({uri: image.path});
      console.log('photo', photo);
    });
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return profilePhotoReference.current?.getValue() || '';
    },
  }));
  return (
    <View style={styles.container}>
      <ProfilePhoto photoUrl={photo} />
      <AddPhotoButton onPress={onPressAddPhoto} />
    </View>
  );
};

export const ProfilePhotoWithButton = forwardRef(
  ProfilePhotoWithButtonAndReference,
);
