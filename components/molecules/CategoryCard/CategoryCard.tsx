import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../../constants/colors';
import {CardGrey, TextSmall} from '../../atoms';
import styles from './CategoryCard.styles';

export type Props = {
  text: string;
};

export const CategoryCard: React.FC<Props> = ({text}) => {
  return (
    <CardGrey>
      <Text style={styles.text}>{text}</Text>
    </CardGrey>
  );
};
