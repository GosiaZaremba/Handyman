import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextSmall} from '../TextSmall/TextSmall';
import styles from './DrawerMenuNotification.styles';

export type Props = {
  notificationMessage?: string;
};

export const DrawerMenuNotification: React.FC<Props> = ({
  notificationMessage,
}) => {
  return (
    <View style={styles.container}>
      <TextSmall text={notificationMessage} fontColor={Colors.font.white} />
    </View>
  );
};
