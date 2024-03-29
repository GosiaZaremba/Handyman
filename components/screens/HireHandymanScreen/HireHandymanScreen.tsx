/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {HireHandymanTemplate} from '../../templates';

export type Props = {
  route: any;
};

export const HireHandymanScreen: React.FC<Props> = ({route}) => {
  const handymanInfo = route.params.item;
  console.log(handymanInfo);

  const sendAppointmentForm = (
    selectedDate?: undefined | Date | string,
    selectedHours?: any,
    reasonForHire?: string,
  ) => {
    console.log(
      'Hire a Handyman with following data:',
      'date: ',
      selectedDate,
      'number of hours: ',
      selectedHours,
      'reason for hire: ',
      reasonForHire,
      'handyman id:',
      handymanInfo.id,
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
      photoUrl={handymanInfo.photo}
      handymanName={handymanInfo.name}
      ratingNumber={handymanInfo.starRating}
      starRating={handymanInfo.starRating}
      numberOfReviews={handymanInfo.numberOfReviews}
      subCategories={handymanInfo.subCategories}
      hourlyRate={handymanInfo.hourlyRate}
    />
  );
};
