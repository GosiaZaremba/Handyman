import React from 'react';
import {HireHandymanTemplate} from '../../templates';

export type Props = {
  isOnline: boolean;
  photoUrl: any;
  handymanName: string;
  ratingNumber: number;
  starRating: number;
  numberOfReviews: number;
  subCategories: any;
  hourlyRate: number;
};

export const HireHandymanScreen: React.FC<Props> = ({
  isOnline,
  photoUrl,
  handymanName,
  ratingNumber,
  starRating,
  numberOfReviews,
  subCategories,
  hourlyRate,
}) => {
  const sendAppointmentForm = (
    selectedDate?: undefined | Date | string,
    selectedHours?: any,
    reasonForHire?: string,
  ) => {
    console.log(
      'Hire a Handyman with following data:',
      selectedDate,
      selectedHours,
      reasonForHire,
    );
  };
  const onPressPrevious = () => {
    console.log('Go to previous page');
  };

  return (
    <HireHandymanTemplate
      sendAppointmentForm={sendAppointmentForm}
      onPressPrevious={onPressPrevious}
      isOnline={isOnline}
      photoUrl={photoUrl}
      handymanName={handymanName}
      ratingNumber={ratingNumber}
      starRating={starRating}
      numberOfReviews={numberOfReviews}
      subCategories={subCategories}
      hourlyRate={hourlyRate}
    />
  );
};
