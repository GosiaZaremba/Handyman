import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {
  DropdownSelectReference,
  DropdownSelect,
  TextMedium,
  TextSmall,
} from '../../atoms';
import styles from './DropdownSelectWithLabel.styles';

export type Props = {
  selectOptions: any;
  labelTextLarge: string;
  labelTextSmall: string;
  placeholderValue: string;
};

export type DropdownSelectWithLabelReference = {
  getValue: () => any;
};

const DropdownSelectWithLabelAndReference: React.ForwardRefRenderFunction<
  DropdownSelectWithLabelReference,
  Props
> = (
  {selectOptions, labelTextLarge, labelTextSmall, placeholderValue},
  ref,
) => {
  const selectReference = useRef<DropdownSelectReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return selectReference.current?.getValue();
    },
  }));
  return (
    <View>
      <View style={styles.labelContainer}>
        <TextMedium text={labelTextLarge} fontColor={Colors.font.darkGrey} />
        <TextSmall text={labelTextSmall} fontColor={Colors.font.darkGrey} />
      </View>
      <DropdownSelect
        selectOptions={selectOptions}
        placeholderValue={selectOptions[0].label}
        ref={selectReference}
      />
    </View>
  );
};

export const DropdownSelectWithLabel = forwardRef(
  DropdownSelectWithLabelAndReference,
);
