import React from 'react';
import {View} from 'react-native';
import {CardWhite, HandymanName} from '../../atoms';
import {HandymanProfilePhotoWithStatus} from '../../molecules';

export type Props = {
  isOnline: boolean;
  photoUrl: string;
  handymanName: string;
};

export const HandymanCard: React.FC<Props> = ({
  photoUrl,
  isOnline,
  handymanName,
}) => {
  return (
    <CardWhite>
      <View>
        <HandymanProfilePhotoWithStatus
          photoUrl={photoUrl}
          isOnline={isOnline}
        />
        <View>
          <HandymanName text={handymanName} />
        </View>
      </View>
    </CardWhite>
  );
};
