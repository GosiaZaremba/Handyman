import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TextMedium} from '../../atoms';
import {HandymanAppointmentCard, AppointmentForm} from '../../organisms';
import styles from './HireHandymanTemplate.styles';

export type Props = {
  sendAppointmentForm: (
    selectedDate?: undefined | Date | string,
    selectedHours?: any,
    reasonForHire?: string,
  ) => void;
  onPressPrevious: () => void;
  isOnline: boolean;
  photoUrl: any;
  handymanName: string;
  ratingNumber: number;
  starRating: number;
  numberOfReviews: number;
  subCategories: any;
  hourlyRate: number;
};

export const HireHandymanTemplate: React.FC<Props> = ({
  sendAppointmentForm,
  onPressPrevious,
  isOnline,
  photoUrl,
  handymanName,
  ratingNumber,
  starRating,
  numberOfReviews,
  subCategories,
  hourlyRate,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/png/05_top.png')}
      resizeMode={'cover'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextMedium
            text={'Select the date, time and hour of service you need'}
            fontColor={Colors.font.white}
          />
        </View>
        <View style={styles.cardContainer}>
          <HandymanAppointmentCard
            isOnline={isOnline}
            photoUrl={photoUrl}
            handymanName={handymanName}
            ratingNumber={ratingNumber}
            starRating={starRating}
            numberOfReviews={numberOfReviews}
            subCategories={subCategories}
            hourlyRate={hourlyRate}
          />
        </View>
        <View>
          <AppointmentForm
            sendAppointmentForm={sendAppointmentForm}
            onPressPrevious={onPressPrevious}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
