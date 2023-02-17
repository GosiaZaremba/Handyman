import React from 'react';
import {Pressable, Image, View, ImageSourcePropType} from 'react-native';
import {TextSmall} from '../TextSmall/TextSmall';
import styles from './ButtonCategory.styles';
import Icon from 'react-native-vector-icons/AntDesign';

export type Props = {
  onPress?: () => void;
  category?: ImageSourcePropType | undefined;
  text: string;
  isActive: boolean;
  testID?: string;
  testOnly_pressed?: boolean;
};

export const ButtonCategory: React.FC<Props> = ({
  category,
  text,
  onPress,
  isActive,
  testID,
  testOnly_pressed,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        testID={testID}
        hitSlop={5}
        style={isActive ? styles.pressed : styles.pressable}
        onPress={onPress}
        testOnly_pressed={testOnly_pressed}>
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
