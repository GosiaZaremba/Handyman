import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {ButtonGreenIcon, ButtonGreenIconFirst} from '../../atoms';
import {
  TextAreaWithLabelReference,
  DropdownSelectWithLabelReference,
  CalendarWithLabelReference,
  CalendarStripeWithLabel,
  DropdownSelectWithLabel,
  TextAreaWithLabel,
} from '../../molecules';
import {DrawerNavProp} from '../../templates/DrawerTemplate/DrawerTemplate';
import styles from './AppointmentForm.styles';

export type Props = {
  sendAppointmentForm: (
    selectedDate?: undefined | Date | string,
    selectedHours?: unknown,
    reasonForHire?: string,
  ) => void;
  onPressPrevious: () => void;
};

export const AppointmentForm: React.FC<Props> = ({
  sendAppointmentForm,
  onPressPrevious,
}) => {
  const navigaion = useNavigation<DrawerNavProp>();

  const selectOptions = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
  ];

  const selectedDateReference = useRef<CalendarWithLabelReference>(null);
  const selectedHoursReference = useRef<DropdownSelectWithLabelReference>(null);
  const reasonForHireReference = useRef<TextAreaWithLabelReference>(null);

  const onPressNext = () => {
    const selectedDateValue = selectedDateReference.current?.getValue();
    const selectedHoursValue = selectedHoursReference.current?.getValue();
    const reasonForHireValue = reasonForHireReference.current?.getValue();

    if (selectedDateValue && selectedHoursValue && reasonForHireValue) {
      sendAppointmentForm(
        selectedDateValue,
        selectedHoursValue,
        reasonForHireValue,
      );
    } else {
      sendAppointmentForm('', '', '');
    }
  };

  const onPressPreviousButton = () => {
    navigaion.navigate('HandymenList');
    onPressPrevious();
  };

  return (
    <View>
      <CalendarStripeWithLabel
        labelText={'SELECT DATE  '}
        iconName={'calendar-o'}
        iconSize={16}
        iconColor={Colors.calendar}
        ref={selectedDateReference}
      />
      <DropdownSelectWithLabel
        selectOptions={selectOptions}
        labelTextLarge={'SELECT HOURS   '}
        labelTextSmall={'(of Service you need)'}
        ref={selectedHoursReference}
      />
      <TextAreaWithLabel
        labelText={'REASON FOR HIRE'}
        placeholder={'Type your reason here'}
        fontColor={Colors.font.darkGrey}
        ref={reasonForHireReference}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <ButtonGreenIconFirst
            buttonText={'Previous'}
            iconName={'arrowleft'}
            onPress={onPressPreviousButton}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonGreenIcon
            buttonText={'Next'}
            iconName={'arrowright'}
            onPress={onPressNext}
          />
        </View>
      </View>
    </View>
  );
};
