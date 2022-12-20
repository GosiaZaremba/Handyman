import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextMedium, TextSmall} from '../../atoms';
import {DollarIcon} from '../DollarIcon/DollarIcon';
import styles from './HourlyRate.styles';

export type Props = {
  hourlyRate: number;
};

export const HourlyRate: React.FC<Props> = ({hourlyRate}) => {
  return (
    <View style={styles.container}>
      <DollarIcon />
      <Text style={styles.text}>{`${hourlyRate} USD/hour`}</Text>
    </View>
  );
};
