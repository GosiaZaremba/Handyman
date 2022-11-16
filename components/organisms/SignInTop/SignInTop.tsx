import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {ProfilePhoto, TextMedium} from '../../atoms';
import styles from './SignInTop.styles';

export type Props = {
  // photoUrl: any;
};

export const SignInTop: React.FC<Props> = (
  {
    // photoUrl
  },
) => {
  return (
    <View style={styles.backgroundImage}>
      <TextMedium text={'Hello!'} fontColor={Colors.font.white} />
      <TextMedium text={'Welcome Back!'} fontColor={Colors.font.white} />
      {/* <View style={styles.photoContainer}>
        <ProfilePhoto photoUrl={photoUrl} />
      </View> */}
    </View>
  );
};
