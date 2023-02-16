import React from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {ProfilePhoto, TextLarge, TextSmall} from '../../atoms';
import styles from './DrawerHeader.styles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export type Props = {
  photoUrl: ImageSourcePropType | undefined;
  userName: string;
  userLocation: string;
};

export const DrawerHeader: React.FC<Props> = ({
  photoUrl,
  userName,
  userLocation,
}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.photoContainer}>
        <ProfilePhoto photoUrl={photoUrl} />
      </View>
      <View>
        <TextLarge text={userName} fontColor={Colors.font.white} />
        <View style={styles.locationContainer}>
          <IoniconsIcon
            name={'location-sharp'}
            size={16}
            color={Colors.font.white}
          />
          <TextSmall text={userLocation} fontColor={Colors.font.white} />
        </View>
      </View>
    </View>
  );
};
