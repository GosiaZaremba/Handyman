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
};

export type DropdownSelectWithLabelReference = {
  getValue: () => any;
};

const DropdownSelectWithLabelAndReference: React.ForwardRefRenderFunction<
  DropdownSelectWithLabelReference,
  Props
> = ({selectOptions}, ref) => {
  const selectReference = useRef<DropdownSelectReference>();

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return selectReference.current?.getValue();
    },
  }));
  return (
    <View>
      <View style={styles.labelContainer}>
        <TextMedium text={'SELECT HOURS  '} fontColor={Colors.font.darkGrey} />
        <TextSmall
          text={'(of Service you need)'}
          fontColor={Colors.font.darkGrey}
        />
      </View>
      <DropdownSelect selectOptions={selectOptions} />
    </View>
  );
};

export const DropdownSelectWithLabel = forwardRef(
  DropdownSelectWithLabelAndReference,
);
