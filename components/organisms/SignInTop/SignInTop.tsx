import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {ProfilePhoto, TextMedium} from '../../atoms';
import styles from './SignInTop.styles';

export type Props = {
  welcomeText: string;
};

export const SignInTop: React.FC<Props> = ({welcomeText}) => {
  return (
    <View style={styles.container}>
      <TextMedium text={'Hello!'} fontColor={Colors.font.white} />
      <TextMedium text={welcomeText} fontColor={Colors.font.white} />
    </View>
  );
};
