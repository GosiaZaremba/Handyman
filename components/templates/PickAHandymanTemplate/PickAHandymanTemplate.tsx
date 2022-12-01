import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextLarge, TextSmall} from '../../atoms';
import {CategoryMenu} from '../../organisms';
import styles from './PickAHandymanTemplate.styles';

export type Props = {};

export const PickAHandymanTemplate: React.FC<Props> = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/05_top.png')}
      resizeMode={'cover'}>
      <View style={styles.header}>
        <TextLarge text={'What You need done?'} fontColor={Colors.font.white} />
        <TextSmall
          text={
            'Cum solicis natoque penatibus et magnis dis parturient ntesmus. Proin vel nibh et elit mollis'
          }
          fontColor={Colors.font.white}
        />
      </View>
      <CategoryMenu />
    </ImageBackground>
  );
};
