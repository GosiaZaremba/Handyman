import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {FAIcon} from '../../atoms';
import styles from './StarRating.styles';

export type Props = {
  starRating: number;
};

export const StarRating: React.FC<Props> = ({starRating}) => (
  <View style={styles.container}>
    <FAIcon
      iconName={'star'}
      iconColor={
        starRating === 0
          ? Colors.star.grey
          : starRating === 1
          ? Colors.starGradient
          : Colors.starGradient
      }
      iconSize={12}
    />
    <FAIcon
      iconName={'star'}
      iconColor={starRating <= 1 ? Colors.star.grey : Colors.starGradient}
      iconSize={12}
    />
    <FAIcon
      iconName={'star'}
      iconColor={starRating <= 2 ? Colors.star.grey : Colors.starGradient}
      iconSize={12}
    />
    <FAIcon
      iconName={'star'}
      iconColor={starRating <= 3 ? Colors.star.grey : Colors.starGradient}
      iconSize={12}
    />
    <FAIcon
      iconName={'star'}
      iconColor={starRating <= 4 ? Colors.star.grey : Colors.starGradient}
      iconSize={12}
    />
  </View>
);
