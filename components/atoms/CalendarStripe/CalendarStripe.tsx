import React, {useImperativeHandle, useRef, useState} from 'react';
import {View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {Colors} from '../../../constants/colors';
import styles from './CalendarStripe.styles';

export type SelectedDateReference = {
  getSelectedDate: () => any;
};

export const CalendarStripe: React.ForwardRefRenderFunction<
  SelectedDateReference
> = ({}, ref) => {
  const [date, setDate] = useState<Date>(new Date());

  const dateReference = useRef<CalendarStrip>(null);

  useImperativeHandle(ref, () => ({
    getSelectedDate: () => {
      setDate();
    },
  }));
  return (
    <CalendarStrip
      scrollable={true}
      showMonth={false}
      scrollerPaging={true}
      style={styles.calendar}
      innerStyle={{}}
      calendarColor={Colors.font.white}
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
    />
  );
};
