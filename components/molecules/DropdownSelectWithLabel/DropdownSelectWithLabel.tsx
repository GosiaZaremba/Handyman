/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {DropdownSelectReference, DropdownSelect, TextSmall} from '../../atoms';
import styles from './DropdownSelectWithLabel.styles';

export type Props = {
  selectOptions: any;
  labelTextLarge: string;
  labelTextSmall: string;
};

export type DropdownSelectWithLabelReference = {
  getValue: () => any;
};

const DropdownSelectWithLabelAndReference: React.ForwardRefRenderFunction<
  DropdownSelectWithLabelReference,
  Props
> = ({selectOptions, labelTextLarge, labelTextSmall}, ref) => {
  const selectReference = useRef<DropdownSelectReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return selectReference.current?.getValue();
    },
  }));
  return (
    <View>
      <View style={styles.labelContainer}>
        <TextSmall text={labelTextLarge} fontColor={Colors.font.darkGrey} />
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
