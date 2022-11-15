import React from 'react';
import {Text} from 'react-native';
import styles from './Link.styles';

export type Props = {
  text: string;
  onPress: () => void;
  fontColor: string;
};

export const Link: React.FC<Props> = ({text, onPress, fontColor}) => {
  return (
    <Text onPress={onPress} style={[styles.text, {color: fontColor}]}>
      {text}
    </Text>
  );
};
