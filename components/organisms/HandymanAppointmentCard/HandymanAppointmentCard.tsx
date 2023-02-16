import React from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {CardWhite, HandymanName} from '../../atoms';
import {
  HandymanProfilePhotoWithStatus,
  HourlyRate,
  RatingReviews,
  SubCategoryList,
} from '../../molecules';
import styles from './HandymanAppointmentCard.styles';

export type Props = {
  isOnline: boolean;
  photoUrl: ImageSourcePropType | undefined;
  handymanName: string;
  ratingNumber: number;
  starRating: number;
  numberOfReviews: number;
  subCategories: unknown;
  hourlyRate: number;
};

export const HandymanAppointmentCard: React.FC<Props> = ({
  photoUrl,
  isOnline,
  handymanName,
  ratingNumber,
  starRating,
  numberOfReviews,
  subCategories,
  hourlyRate,
}) => (
  <CardWhite>
    <View style={styles.topContainer}>
      <View>
        <HandymanProfilePhotoWithStatus
          photoUrl={photoUrl}
          isOnline={isOnline}
        />
      </View>
      <View style={styles.rightContainer}>
        <View>
          <HandymanName text={handymanName} />
          <RatingReviews
            ratingNumber={ratingNumber}
            starRating={starRating}
            numberOfReviews={numberOfReviews}
          />
          <SubCategoryList subCategories={subCategories} />
        </View>
        <HourlyRate hourlyRate={hourlyRate} />
      </View>
    </View>
  </CardWhite>
);
