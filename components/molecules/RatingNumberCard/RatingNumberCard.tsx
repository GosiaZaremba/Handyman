import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {CardGold, TextSmall} from '../../atoms';
import styles from './RatingNumberCard.styles';

export type Props = {
  ratingNumber: number;
};

export const RatingNumberCard: React.FC<Props> = ({ratingNumber}) => {
  return (
    <View style={styles.container}>
      <CardGold>
        <TextSmall
          text={ratingNumber.toFixed(1)}
          fontColor={Colors.font.white}
        />
      </CardGold>
    </View>
  );
};
