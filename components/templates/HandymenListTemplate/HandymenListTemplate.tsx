import React from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextMedium} from '../../atoms';
import {HandymanCard} from '../../organisms';
import styles from './HandymenListTemplate.styles';
import handymenList from '../../../assets/data/handymen';

export type Props = {
  chosenCategory?: string;
};

export const HandymenListTemplate: React.FC<Props> = ({chosenCategory}) => {
  const showHandymen = () => {
    const newList = handymenList.filter(handyman => {
      return handyman.category === chosenCategory;
    });
  };
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
          data={handymenList}
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
              />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};
