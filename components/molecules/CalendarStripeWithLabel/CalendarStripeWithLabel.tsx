import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import styles from './CalendarStripeWithLabel.styles';

import {
  CalendarStripe,
  FAIcon,
  SelectedDateReference,
  TextSmall,
} from '../../atoms';

export type Props = {
  labelText: string;
  iconName: string;
  iconSize: number;
  iconColor: string;
};

export type CalendarWithLabelReference = {
  getValue: () => undefined | Date | string;
};

const CalendarStripeWithLabelReference: React.ForwardRefRenderFunction<
  CalendarWithLabelReference,
  Props
> = ({labelText, iconName, iconColor, iconSize}, ref) => {
  const dateReference = useRef<SelectedDateReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return dateReference.current?.getValue();
    },
  }));

  return (
    <>
      <View style={styles.labelContainer}>
        <TextSmall text={labelText} fontColor={Colors.font.darkGrey} />
        <FAIcon iconName={iconName} iconColor={iconColor} iconSize={iconSize} />
      </View>
      <CalendarStripe ref={dateReference} />
    </>
  );
};

export const CalendarStripeWithLabel = forwardRef(
  CalendarStripeWithLabelReference,
);
