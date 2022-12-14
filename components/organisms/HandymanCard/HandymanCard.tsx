import React from 'react';
import {View} from 'react-native';
import {CardWhite, HandymanName} from '../../atoms';
import {
  HandymanProfilePhotoWithStatus,
  RatingReviews,
  SubCategoryList,
} from '../../molecules';
import styles from './HandymanCard.styles';

export type Props = {
  isOnline: boolean;
  photoUrl: string;
  handymanName: string;
  ratingNumber: number;
  starRating: number;
  numberOfReviews: number;
  subCategories: any;
};

export const HandymanCard: React.FC<Props> = ({
  photoUrl,
  isOnline,
  handymanName,
  ratingNumber,
  starRating,
  numberOfReviews,
  subCategories,
}) => {
  return (
    <CardWhite>
      <View style={styles.outerContainer}>
        <View style={styles.topContainer}>
          <HandymanProfilePhotoWithStatus
            photoUrl={photoUrl}
            isOnline={isOnline}
          />
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
      </View>
    </CardWhite>
  );
};
