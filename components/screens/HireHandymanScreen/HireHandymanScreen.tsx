/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {HireHandymanTemplate} from '../../templates';

export type Props = {
  route: any;
};

export const HireHandymanScreen: React.FC<Props> = ({route}) => {
  const handymanInfo = route.params;

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
      isOnline={handymanInfo.isOnline}
      photoUrl={handymanInfo.photoUrl}
      handymanName={handymanInfo.handymanName}
      ratingNumber={handymanInfo.ratingNumber}
      starRating={handymanInfo.starRating}
      numberOfReviews={handymanInfo.numberOfReviews}
      subCategories={handymanInfo.subCategories}
      hourlyRate={handymanInfo.hourlyRate}
    />
  );
};
