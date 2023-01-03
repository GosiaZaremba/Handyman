import React from 'react';
import {HandymenListTemplate} from '../../templates';

export type Props = {
  route: any;
};

export const HandymenListScreen: React.FC<Props> = ({route}) => {
  const activeCategoryName = route.params.activeCategoryName;
  console.log(activeCategoryName);

  return <HandymenListTemplate activeCategoryName={activeCategoryName} />;
};
