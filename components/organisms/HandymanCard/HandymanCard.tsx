import React from 'react';
import {View} from 'react-native';
import {ButtonGreen, CardWhite, Divider, HandymanName} from '../../atoms';
import {
  HandymanProfilePhotoWithStatus,
  HourlyRate,
  RatingReviews,
  SubCategoryList,
} from '../../molecules';
import styles from './HandymanCard.styles';

export type Props = {
  isOnline: boolean;
  photoUrl: any;
  handymanName: string;
  ratingNumber: number;
  starRating: number;
  numberOfReviews: number;
  subCategories: any;
  hourlyRate: number;
  onPressChooseHandymanButton: () => void;
};

export const HandymanCard: React.FC<Props> = ({
  photoUrl,
  isOnline,
  handymanName,
  ratingNumber,
  starRating,
  numberOfReviews,
  subCategories,
  hourlyRate,
  onPressChooseHandymanButton,
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
        <Divider />
        <View style={styles.bottomContainer}>
          <HourlyRate hourlyRate={hourlyRate} />
          <View style={styles.buttonContainer}>
            <ButtonGreen
              buttonText={'Choose'}
              onPress={onPressChooseHandymanButton}
            />
          </View>
        </View>
      </View>
    </CardWhite>
  );
};
