import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextMedium} from '../../atoms';
import styles from './HandymenListTemplate.styles';

export type Props = {};

export const HandymenListTemplate: React.FC<Props> = ({}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/05_top.png')}
      resizeMode={'cover'}>
      <View style={styles.header}>
        <TextMedium
          text={'Choose a handyman from below that best fits Your needs'}
          fontColor={Colors.font.white}
        />
      </View>
    </ImageBackground>
  );
};
