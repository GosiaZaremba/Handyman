import React from 'react';
import {Pressable, Image, View} from 'react-native';
import {TextSmall} from '../TextSmall/TextSmall';
import styles from './ButtonCategory.styles';

export type Props = {
  onPress: () => void;
  categoryIcon: any;
  text: string;
};

export const ButtonCategory: React.FC<Props> = ({
  categoryIcon,
  text,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={5}
      style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}>
      <Image source={categoryIcon} style={styles.image} />
      <TextSmall text={text} fontColor={'black'} />
    </Pressable>
  );
};
