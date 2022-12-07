import React from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {FAIcon} from '../../atoms';
import styles from './DollarIcon.styles';

export const DollarIcon: React.FC = () => {
  return (
    <View style={styles.ring}>
      <FAIcon
        iconName={'dollar'}
        iconColor={Colors.button.dark}
        iconSize={10}
      />
    </View>
  );
};
