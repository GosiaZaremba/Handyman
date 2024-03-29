/* eslint-disable @typescript-eslint/no-explicit-any */
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
        renderItem={({item}) => <CategoryCard text={item} key={item} />}
      />
    </View>
  );
};
