import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {ButtonCategory, ButtonGreenIcon} from '../../atoms';
import styles from './CategoryMenu.styles';

export type Props = {};

export const CategoryMenu: React.FC<Props> = () => {
  const [activeCategoryName, setActiveCategoryName] = useState<string>('');

  const onPressCategory = (name: string) => {
    setActiveCategoryName(name);
  };

  const onPressNext = () => console.log('Going to next step.');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.categoryContainer}>
        <ButtonCategory
          onPress={() => onPressCategory('cleaning')}
          category={require('../../../assets/png/05_icons_cleaning.png')}
          text={'Cleaning'}
          isActive={activeCategoryName === 'cleaning'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('plumbing')}
          category={require('../../../assets/png/05_icons_plumbing.png')}
          text={'Plumbing'}
          isActive={activeCategoryName === 'plumbing'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('painting')}
          category={require('../../../assets/png/05_icons_painting.png')}
          text={'Painting'}
          isActive={activeCategoryName === 'painting'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('pack-and-shift')}
          category={require('../../../assets/png/05_icons_pack.png')}
          text={'Pack $ Shift'}
          isActive={activeCategoryName === 'pack-and-shift'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('electrical')}
          category={require('../../../assets/png/05_icons_electrical.png')}
          text={'Electrical'}
          isActive={activeCategoryName === 'electrical'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('laundry')}
          category={require('../../../assets/png/05_icons_laundry.png')}
          text={'Laundry'}
          isActive={activeCategoryName === 'laundry'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('wood-carving')}
          category={require('../../../assets/png/05_icons_woodCarving.png')}
          text={'Wood Carving'}
          isActive={activeCategoryName === 'wood-carving'}
        />
        <ButtonCategory
          onPress={() => onPressCategory('home-repair')}
          category={require('../../../assets/png/05_icons_homeRepair.png')}
          text={'Home Repair'}
          isActive={activeCategoryName === 'home-repair'}
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
