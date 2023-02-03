import React from 'react';
import {ImageBackground, View} from 'react-native';
import {OffButton} from '../../molecules';
import {DrawerHeader} from '../DrawerHeader/DrawerHeader';
import {DrawerMainItems} from '../DrawerMainItems/DrawerMainItems';
import styles from './DrawerContent.styles';

export type Props = {
  photoUrl: any;
  userName: string;
  userLocation: string;
  onPressLogOut: () => void;
};

export const DrawerContent: React.FC<Props> = ({
  photoUrl,
  userName,
  userLocation,
  onPressLogOut,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/05_top.png')}
      resizeMode={'cover'}>
      <View style={styles.headerContainer}>
        <DrawerHeader
          photoUrl={photoUrl}
          userName={userName}
          userLocation={userLocation}
        />
      </View>
      <View style={styles.offButton}>
        <OffButton onPress={onPressLogOut} />
      </View>
      <DrawerMainItems />
    </ImageBackground>
  );
};
