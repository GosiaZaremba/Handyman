import React from 'react';
import {HandymenListTemplate} from '../../templates';
import handymenList from '../../../assets/data/handymen';

export type Props = {
  choosenCategory: string;
};

export const HandymenListScreen: React.FC<Props> = ({choosenCategory}) => {
  const showHandymen = () => {
    const newList = handymenList.filter(handyman => {
      return handyman.category === choosenCategory;
    });
  };

  return <HandymenListTemplate handymenList={handymenList} />;
};
