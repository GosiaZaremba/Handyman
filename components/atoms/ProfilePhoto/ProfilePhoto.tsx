import React from 'react';
import {View, Image} from 'react-native';
import styles from './ProfilePhoto.styles';

export type Props = {
  photoUrl: any;
};

export const ProfilePhoto: React.FC<Props> = ({photoUrl}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={photoUrl} style={styles.image}></Image>
    </View>
  );
};
