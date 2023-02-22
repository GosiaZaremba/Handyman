/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useImperativeHandle, useRef, useState, forwardRef} from 'react';
import {View} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import CalendarStrip from 'react-native-calendar-strip';
import styles from './CalendarStripe.styles';

export type SelectedDateReference = {
  getValue: () => undefined | Date | string;
};

export type Props = {
  testID?: string;
};

const CalendarStripeWithReference: React.ForwardRefRenderFunction<
  SelectedDateReference,
  Props
> = ({testID}, ref) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const dateReference = useRef<ReactNativeCalendarStrip>(null);

  const onDatePick = (date: any) => {
    setSelectedDate(date);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return selectedDate;
    },
  }));
  return (
    <View testID={testID}>
      <CalendarStrip
        scrollable={true}
        showMonth={false}
        scrollerPaging={true}
        style={styles.calendar}
        innerStyle={styles.innerStyle}
        dateNumberStyle={styles.dateNumberStyle}
        dateNameStyle={styles.dateNameStyle}
        iconContainer={styles.iconContainer}
        startingDate={new Date()}
        selectedDate={selectedDate}
        highlightDateNumberStyle={styles.highlightDateNumberStyle}
        highlightDateNumberContainerStyle={
          styles.highlightDateNumberContainerStyle
        }
        highlightDateNameStyle={styles.highlightDateNameStyle}
        dayContainerStyle={styles.dayContainerStyle}
        ref={dateReference}
        onDateSelected={date => onDatePick(date)}
      />
    </View>
  );
};

export const CalendarStripe = forwardRef(CalendarStripeWithReference);
