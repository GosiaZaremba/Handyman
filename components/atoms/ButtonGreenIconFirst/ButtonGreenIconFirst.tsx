import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './ButtonGreenIconFirst.styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export type Props = {
  buttonText: string;
  onPress: () => void;
  iconName: string;
  testID?: string;
  testOnly_pressed?: boolean;
};

export const ButtonGreenIconFirst: React.FC<Props> = ({
  buttonText,
  onPress,
  iconName,
  testID,
  testOnly_pressed,
}) => {
  return (
    <LinearGradient
      colors={[Colors.button.light, Colors.button.dark]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.gradient}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : styles.pressable)}
        onPress={onPress}
        testID={testID}
        testOnly_pressed={testOnly_pressed}>
        <Icon name={iconName} style={styles.icon} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </LinearGradient>
  );
};
