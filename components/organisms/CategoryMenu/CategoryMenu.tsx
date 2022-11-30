import React from 'react';
import {View} from 'react-native';
import {ButtonCategory} from '../../atoms';
import styles from './CategoryMenu.styles';

export type Props = {};

export const CategoryMenu: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_cleaning.png')}
        text={'Cleaning'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_plumbing.png')}
        text={'Plumbing'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_painting.png')}
        text={'Painting'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_pack.png')}
        text={'Pack $ Shift'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_electrical.png')}
        text={'Electrical'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_laundry.png')}
        text={'Laundry'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_woodCarving.png')}
        text={'Wood Carving'}
      />
      <ButtonCategory
        onPress={() => {}}
        categoryIcon={require('../../../assets/png/05_icons_homeRepair.png')}
        text={'HomeRepair'}
      />
    </View>
  );
};
