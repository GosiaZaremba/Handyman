import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import styles from './CalendarStripeWithLabel.styles';

import {
  CalendarStripe,
  FAIcon,
  SelectedDateReference,
  TextMedium,
} from '../../atoms';

export type Props = {
  labelText: string;
  iconName: string;
  iconSize: number;
  iconColor: string;
};

export type CalendarLabelReference = {
  getValue: () => undefined | Date | string;
};

const CalendarStripeWithLabelReference: React.ForwardRefRenderFunction<
  CalendarLabelReference,
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
        <TextMedium text={labelText} fontColor={Colors.font.grey} />
        <FAIcon iconName={iconName} iconColor={iconColor} iconSize={iconSize} />
      </View>
      <CalendarStripe />
    </>
  );
};

export const CalendarStripeWithLabel = forwardRef(
  CalendarStripeWithLabelReference,
);
