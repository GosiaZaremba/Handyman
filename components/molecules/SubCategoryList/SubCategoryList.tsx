import React from 'react';
import {FlatList, View} from 'react-native';
import {CategoryCard} from '../CategoryCard/CategoryCard';
import styles from './SubCategoryList.styles';

export type Props = {
  subCategories: any;
};

export const SubCategoryList: React.FC<Props> = ({subCategories}) => {
  return (
    <View style={styles.subCatContainer}>
      <FlatList
        refreshing={false}
        data={subCategories}
        horizontal={true}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          // <View style={styles.categoryContainer}>
          <CategoryCard text={item[1]} key={item} />
          // </View>
        )}
      />
    </View>
  );
};
