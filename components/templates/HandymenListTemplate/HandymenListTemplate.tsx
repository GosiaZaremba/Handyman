/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextMedium} from '../../atoms';
import {HandymanCard} from '../../organisms';
import styles from './HandymenListTemplate.styles';
import handymenList from '../../../assets/data/handymen';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavProp} from '../DrawerTemplate/DrawerTemplate';

export type Props = {
  activeCategoryName?: any;
};

export const HandymenListTemplate: React.FC<Props> = ({activeCategoryName}) => {
  const navigation = useNavigation<DrawerNavProp>();

  const [newHandymenList, setNewHandymenList] = useState<any>(null);

  const showHandymen = () => {
    const filteredList = handymenList.filter(handyman => {
      return handyman.category === activeCategoryName;
    });
    setNewHandymenList(filteredList);
  };

  useEffect(() => {
    showHandymen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategoryName]);
  console.log(activeCategoryName);

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
      <View style={styles.listContainer}>
        <FlatList
          refreshing={false}
          data={newHandymenList}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <HandymanCard
                key={item.name}
                photoUrl={item.photo}
                isOnline={item.isOnline}
                handymanName={item.name}
                ratingNumber={item.starRating}
                starRating={item.starRating}
                numberOfReviews={item.numberOfReviews}
                subCategories={item.subCategories}
                hourlyRate={item.hourlyRate}
                onPressChooseHandymanButton={() => {
                  navigation.navigate('HireHandyman', {item: item});
                }}
              />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};
