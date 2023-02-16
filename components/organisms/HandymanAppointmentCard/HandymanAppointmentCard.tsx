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
}) => {
  return (
    <CardWhite>
      <View>
        <View style={styles.topContainer}>
          <View style={styles.profilePhotoContainer}>
            <HandymanProfilePhotoWithStatus
              photoUrl={photoUrl}
              isOnline={isOnline}
            />
          </View>
          <View style={styles.reviewsContainer}>
            <HandymanName text={handymanName} />
            <RatingReviews
              ratingNumber={ratingNumber}
              starRating={starRating}
              numberOfReviews={numberOfReviews}
            />
            <SubCategoryList subCategories={subCategories} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <HourlyRate hourlyRate={hourlyRate} />
        </View>
      </View>
    </CardWhite>
  );
};
