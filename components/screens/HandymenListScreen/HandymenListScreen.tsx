import React from 'react';
import {HandymenListTemplate} from '../../templates';

export type Props = {
  route: unknown;
};

export const HandymenListScreen: React.FC = ({route}) => {
  const activeCategoryName = route.params.activeCategoryName;

  const onPressChooseHandymanButton = () => {
    console.log('sialala');
  };

  return (
    <HandymenListTemplate
      activeCategoryName={activeCategoryName}
      onPressChooseHandymanButton={onPressChooseHandymanButton}
    />
  );
};
