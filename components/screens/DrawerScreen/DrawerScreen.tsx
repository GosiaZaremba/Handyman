import React from 'react';
import {DrawerTemplate} from '../../templates';
import data from '../../../assets/data/handymen';

export const DrawerScreen: React.FC = () => {
  const onPressLogOut = () => {
    console.log('Loging out');
  };
  return (
    <DrawerTemplate
      photoUrl={data[0].photo}
      userName={data[0].name}
      userLocation={'Melbourne, Australia'}
      onPressLogOut={onPressLogOut}
    />
  );
};
