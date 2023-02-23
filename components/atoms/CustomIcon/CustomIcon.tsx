import React from 'react';
import {SvgXml} from 'react-native-svg';

export type Props = {
  icon: string;
  testID?: string;
};

export const CustomIcon: React.FC<Props> = ({icon, testID}) => {
  return (
    <>
      <SvgXml width={20} height={20} xml={icon} testID={testID} />
    </>
  );
};
