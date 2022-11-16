import React from 'react';
import {Text} from 'react-native';
import styles from './TextMedium.styles';

export type Props = {
  text: string;
  fontColor: string;
};

export const TextMedium: React.FC<Props> = ({text, fontColor}) => {
  return <Text style={[styles.text, {color: fontColor}]}>{text}</Text>;
};
