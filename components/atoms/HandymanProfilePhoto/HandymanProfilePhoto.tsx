import React from 'react';
import {View, Image} from 'react-native';
import styles from './HandymanProfilePhoto.styles';

export type Props = {
  photoUrl: any;
};

export const HandymanProfilePhoto: React.FC<Props> = ({photoUrl}) => {
  return <Image source={photoUrl} style={styles.image}></Image>;
};
