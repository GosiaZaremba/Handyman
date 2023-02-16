import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import styles from './HandymanProfilePhoto.styles';

export type Props = {
  photoUrl: ImageSourcePropType | undefined;
};

export const HandymanProfilePhoto: React.FC<Props> = ({photoUrl}) => {
  return <Image source={photoUrl} style={styles.image} />;
};
