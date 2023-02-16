import React from 'react';
import {HandymenListTemplate} from '../../templates';

export type Props = {
  route: unknown;
};

export const HandymenListScreen: React.FC = ({route}) => {
  const activeCategoryName = route.params.activeCategoryName;

  return <HandymenListTemplate activeCategoryName={activeCategoryName} />;
};
