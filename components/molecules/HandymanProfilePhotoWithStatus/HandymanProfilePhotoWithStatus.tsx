import React, {useState} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {HandymanProfilePhoto} from '../../atoms';
import styles from './HandymanProfilePhotoWithStatus.styles';

export type Props = {
  photoUrl: string;
  isOnline: boolean;
};

export const HandymanProfilePhotoWithStatus: React.FC<Props> = ({
  photoUrl,
  isOnline,
}) => {
  return (
    <View style={styles.container}>
      <HandymanProfilePhoto photoUrl={photoUrl} />
      <View
        style={[
          styles.status,
          isOnline
            ? {backgroundColor: Colors.button.light}
            : {backgroundColor: Colors.grey.light},
        ]}></View>
    </View>
  );
};
