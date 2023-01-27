import React from 'react';
import {Text} from 'react-native';
import styles from './TextSmall.styles';

export type Props = {
  text?: string | number;
  fontColor?: string;
};

export const TextSmall: React.FC<Props> = ({text, fontColor}) => {
  return <Text style={[styles.text, {color: fontColor}]}>{text}</Text>;
};
