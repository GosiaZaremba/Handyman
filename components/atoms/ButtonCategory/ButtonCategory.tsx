import React, {useState} from 'react';
import {Pressable, Image, View} from 'react-native';
import {TextSmall} from '../TextSmall/TextSmall';
import styles from './ButtonCategory.styles';
import Icon from 'react-native-vector-icons/AntDesign';

export type Props = {
  // onPress: () => void;
  categoryIcon: any;
  text: string;
};

export const ButtonCategory: React.FC<Props> = ({categoryIcon, text}) => {
  const [pressedIn, setPressedIn] = useState(false);

  const onPressIn = () => {
    setPressedIn(pressedIn => !pressedIn);
  };

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={5}
        style={pressedIn ? styles.pressed : styles.pressable}
        onPress={onPressIn}>
        <View style={styles.iconContainer}>
          <Icon
            name={'checkcircle'}
            style={pressedIn ? styles.icon : styles.iconHidden}
          />
        </View>
        <Image source={categoryIcon} style={styles.image} />
        <TextSmall text={text} fontColor={'black'} />
      </Pressable>
    </View>
  );
};
