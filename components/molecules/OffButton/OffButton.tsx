import React from 'react';
import {Pressable} from 'react-native';
import {Colors} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './OffButton.styles';

export type Props = {
  onPress: () => void;
};

export const OffButton: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Icon name={'power-sharp'} size={18} color={Colors.font.darkGrey} />
    </Pressable>
  );
};
