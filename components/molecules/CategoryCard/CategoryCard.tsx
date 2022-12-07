import React from 'react';
import {Colors} from '../../../constants/colors';
import {CardGrey, TextSmall} from '../../atoms';

export type Props = {
  text: string;
};

export const CategoryCard: React.FC<Props> = ({text}) => {
  return (
    <CardGrey>
      <TextSmall text={text} fontColor={Colors.font.darkGrey}></TextSmall>
    </CardGrey>
  );
};
