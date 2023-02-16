import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import styles from './ProfilePhoto.styles';

export type Props = {
  photoUrl: ImageSourcePropType | undefined;
};

export const ProfilePhoto: React.FC<Props> = ({photoUrl}) => {
  return (
    <View>
      <Image source={photoUrl} style={styles.image} />
    </View>
  );
};
