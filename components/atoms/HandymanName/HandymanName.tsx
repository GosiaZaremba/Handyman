import React from 'react';
import {Text} from 'react-native';
import styles from './HandymanName.styles';

export type Props = {
  text: string;
};

export const HandymanName: React.FC<Props> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};
