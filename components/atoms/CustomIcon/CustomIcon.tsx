import React from 'react';
import {SvgXml} from 'react-native-svg';

export type Props = {
  icon: string;
};

export const CustomIcon: React.FC<Props> = ({icon}) => {
  return (
    <>
      <SvgXml width={25} height={25} xml={icon} />
    </>
  );
};
