import React, {useImperativeHandle, useRef, useState, forwardRef} from 'react';
import {View} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import CalendarStrip from 'react-native-calendar-strip';
import {Colors} from '../../../constants/colors';
import styles from './CalendarStripe.styles';

export type SelectedDateReference = {
  getValue: () => undefined | Date | string;
};

const CalendarStripeWithReference: React.ForwardRefRenderFunction<
  SelectedDateReference
> = ({}, ref) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const dateReference = useRef<ReactNativeCalendarStrip>(null);

  const onDateSelection = date => {
    setSelectedDate(date);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return selectedDate;
    },
  }));
  return (
    <CalendarStrip
      scrollable={true}
      showMonth={false}
      scrollerPaging={true}
      style={styles.calendar}
      innerStyle={{}}
      dateNumberStyle={styles.dateNumberStyle}
      dateNameStyle={styles.dateNameStyle}
      iconContainer={styles.iconContainer}
      startingDate={new Date()}
      highlightDateNumberStyle={styles.highlightDateNumberStyle}
      highlightDateNumberContainerStyle={
        styles.highlightDateNumberContainerStyle
      }
      highlightDateNameStyle={styles.highlightDateNameStyle}
      dayContainerStyle={styles.dayContainerStyle}
      ref={dateReference}
      onDateSelected={onDateSelection}
    />
  );
};

export const CalendarStripe = forwardRef(CalendarStripeWithReference);
