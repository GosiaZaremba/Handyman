import React, {useState} from 'react';
import {Pressable, Image, View} from 'react-native';
import {TextSmall} from '../TextSmall/TextSmall';
import styles from './ButtonCategory.styles';
import Icon from 'react-native-vector-icons/AntDesign';

export type Props = {
  onPress?: () => void;
  category: any;
  text: string;
  isActive: boolean;
};

export const ButtonCategory: React.FC<Props> = ({
  category,
  text,
  onPress,
  isActive,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={5}
        style={isActive ? styles.pressed : styles.pressable}
        onPress={onPress}>
        <View style={styles.iconContainer}>
          <Icon
            name={'checkcircle'}
            style={isActive ? styles.icon : styles.iconHidden}
          />
        </View>
        <Image source={category} style={styles.image} />
        <TextSmall text={text} fontColor={'black'} />
      </Pressable>
    </View>
  );
};
