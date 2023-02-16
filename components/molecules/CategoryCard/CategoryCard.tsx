import React from 'react';
import {Text} from 'react-native';
import {CardGrey} from '../../atoms';
import styles from './CategoryCard.styles';

export type Props = {
  text: string;
};

export const CategoryCard: React.FC<Props> = ({text}) => {
  return (
    <CardGrey>
      <Text style={styles.categoryName}>{text}</Text>
    </CardGrey>
  );
};
