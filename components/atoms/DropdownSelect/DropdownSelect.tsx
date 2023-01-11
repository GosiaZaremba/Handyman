import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './DropdownSelect.styles';

export type Props = {
  selectOptions: any;
};

export type DropdownSelectReference = {
  getValue: () => any;
};

const DropdownSelectWithReference: React.ForwardRefRenderFunction<
  DropdownSelectReference,
  Props
> = ({selectOptions}, ref) => {
  const pickedValueReference = useRef<any>(null);

  const selectValue = value => {
    setValue(value);
    console.log(value.value);
    console.log('ref', pickedValueReference);
    setIsFocus(false);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return value;
    },
  }));

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={selectOptions}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={selectOptions[0].label}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={selectValue}
        ref={pickedValueReference}
      />
    </View>
  );
};

export const DropdownSelect = forwardRef(DropdownSelectWithReference);
