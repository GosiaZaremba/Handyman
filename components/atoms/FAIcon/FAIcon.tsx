import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FAIcon.styles';

export type Props = {
  iconName: string;
  iconSize: number;
  iconColor: string;
};

export const FAIcon: React.FC<Props> = ({iconName, iconSize, iconColor}) => {
  return (
    <Icon
      name={iconName}
      style={[styles.icon, {color: iconColor, fontSize: iconSize}]}
    />
  );
};
