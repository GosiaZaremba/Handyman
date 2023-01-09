import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import styles from './CalendarStripeWithLabel.styles';

import {
  CalendarStripe,
  FAIcon,
  SelectedDateReference,
  TextLarge,
  TextMedium,
} from '../../atoms';

export type CalendarLabelReference = {
  getValue: () => undefined | Date | string;
};

const CalendarStripeWithLabelReference: React.ForwardRefRenderFunction<
  CalendarLabelReference
> = ({}, ref) => {
  const dateReference = useRef<SelectedDateReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return dateReference.current?.getValue();
    },
  }));

  return (
    <>
      <View style={styles.labelContainer}>
        <TextMedium text={'SELECT DATE'} fontColor={Colors.font.grey} />
        <FAIcon
          iconName={'calendar-o'}
          iconColor={Colors.calendar}
          iconSize={16}
        />
      </View>
      <CalendarStripe />
    </>
  );
};

export const CalendarStripeWithLabel = forwardRef(
  CalendarStripeWithLabelReference,
);
