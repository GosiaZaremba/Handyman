import React from 'react';
import {HireHandymanTemplate} from '../../templates';

export type Props = {
  // isOnline: boolean;
  // photoUrl: any;
  // handymanName: string;
  // ratingNumber: number;
  // starRating: number;
  // numberOfReviews: number;
  // subCategories: any;
  // hourlyRate: number;
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
      isOnline={route.params.isOnline}
      photoUrl={route.params.photoUrl}
      handymanName={route.params.handymanName}
      ratingNumber={route.params.ratingNumber}
      starRating={route.params.starRating}
      numberOfReviews={route.params.numberOfReviews}
      subCategories={route.params.subCategories}
      hourlyRate={route.params.hourlyRate}
    />
  );
};
