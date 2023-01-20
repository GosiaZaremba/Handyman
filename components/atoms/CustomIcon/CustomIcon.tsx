import React from 'react';
// import {Image, View} from 'react-native';
// import styles from './CustomIcon.styles';

// export type Props = {
//   iconName: any;
// };

// export const CustomIcon: React.FC<Props> = ({iconName}) => {
//   return (
//     <View>
//       <Image source={iconName} />
//     </View>
//   );
// };

import {SvgXml} from 'react-native-svg';
import svgs from '../../../assets/svgs/svgs';

const fill = '#dd4b39';

export const CustomIcon: React.FC = () => {
  return (
    <>
      <SvgXml width={50} height={50} xml={svgs.favourites} fill={fill} />
    </>
  );
};
