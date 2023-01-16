import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextSmall} from '../../atoms';
import {RatingNumberCard} from '../RatingNumberCard/RatingNumberCard';
import {StarRating} from '../StarRating/StarRating';
import styles from './RatingReviews.styles';

export type Props = {
  ratingNumber?: number;
  numberOfReviews?: number;
  starRating?: number;
};

export const RatingReviews: React.FC<Props> = ({
  ratingNumber,
  numberOfReviews,
  starRating,
}) => {
  return (
    <View style={styles.container}>
      <RatingNumberCard ratingNumber={ratingNumber} />
      <StarRating starRating={starRating} />
      <TextSmall
        text={`(${numberOfReviews} reviews)`}
        fontColor={Colors.font.grey}
      />
    </View>
  );
};
