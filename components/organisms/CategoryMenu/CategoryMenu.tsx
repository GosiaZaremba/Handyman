import React from 'react';
import {View} from 'react-native';
import {ButtonCategory, ButtonGreenIcon} from '../../atoms';
import styles from './CategoryMenu.styles';

export type Props = {};

export const CategoryMenu: React.FC<Props> = () => {
  const onPressNext = () => console.log('Going to next step.');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.categoryContainer}>
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_cleaning.png')}
          text={'Cleaning'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_plumbing.png')}
          text={'Plumbing'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_painting.png')}
          text={'Painting'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_pack.png')}
          text={'Pack $ Shift'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_electrical.png')}
          text={'Electrical'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_laundry.png')}
          text={'Laundry'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_woodCarving.png')}
          text={'Wood Carving'}
        />
        <ButtonCategory
          // onPress={() => {}}
          category={require('../../../assets/png/05_icons_homeRepair.png')}
          text={'Home Repair'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonGreenIcon
          onPress={onPressNext}
          buttonText={'Next'}
          iconName={'arrowright'}
        />
      </View>
    </View>
  );
};
