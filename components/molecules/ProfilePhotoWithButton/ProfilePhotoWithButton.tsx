import React from 'react';
import {View} from 'react-native';
import {ProfilePhoto, AddAccountButton} from '../../atoms';
import styles from './ProfilePhotoWithButton.styles';

export type Props = {
  onPress: () => void;
  photoUrl: string;
};

export const ProfilePhotoWithButton: React.FC<Props> = ({
  onPress,
  photoUrl,
}) => {
  return (
    <View style={styles.outerContainer}>
      <ProfilePhoto photoUrl={photoUrl} />
      <AddAccountButton onPress={onPress} />
    </View>
  );
};
