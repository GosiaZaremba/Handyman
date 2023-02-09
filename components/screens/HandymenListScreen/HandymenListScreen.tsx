import React from 'react';
import {HandymenListTemplate} from '../../templates';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export type Props = {
  route: any;
};

export const HandymenListScreen: React.FC<Props> = ({route}) => {
  // const navigation = useNavigation<NavigationProp>();

  const activeCategoryName = route.params.activeCategoryName;
  console.log(activeCategoryName);

  const onPressChooseHandymanButton = () => {
    // navigation.navigate('HireHandyman')
  };

  return (
    <HandymenListTemplate
      activeCategoryName={activeCategoryName}
      onPressChooseHandymanButton={onPressChooseHandymanButton}
    />
  );
};
