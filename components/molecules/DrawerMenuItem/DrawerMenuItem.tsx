import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {CustomIcon, DrawerMenuNotification} from '../../atoms';
import styles from './DrawerMenuItem.styles';

export type Props = {
  icon: string;
  itemText: string;
  textColor: string;
  notificationMessage?: string;
  onPressIn: () => void;
  onPressOut: () => void;
};

export const DrawerMenuItem: React.FC<Props> = ({
  icon,
  itemText,
  textColor,
  notificationMessage,
  onPressIn,
  onPressOut,
}) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? styles.pressed : styles.outerContainer)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View style={styles.iconAndTextContainer}>
        <CustomIcon icon={icon} />
        <Text style={[styles.text, {color: textColor}]}>{itemText}</Text>
      </View>
      <View
        style={
          notificationMessage
            ? styles.notificationContainer
            : [(styles.notificationContainer, {display: 'none'})]
        }>
        <DrawerMenuNotification notificationMessage={notificationMessage} />
      </View>
    </Pressable>
  );
};
