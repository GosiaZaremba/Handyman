import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './DropdownSelect.styles';

export type DropdownSelectReference = {
  getValue: () => any;
};

const DropdownSelectWithReference: React.ForwardRefRenderFunction<
  DropdownSelectReference
> = ({}, ref) => {
  //   const [open, setOpen] = useState(false);
  //   const [value, setValue] = useState(0);
  //   const [items, setItems] = useState([
  //     {label: '1 hour', value: 1},
  //     {label: '2 hours', value: 2},
  //     {label: '3 hours', value: 3},
  //     {label: '4 hours', value: 4},
  //     {label: '5 hours', value: 5},
  //   ]);

  const pickedValueReference = useRef<any>(null);

  //   const selectValue = value => {
  //     setValue(value);
  //     console.log(value.value);
  //     console.log('ref', pickedValueReference);
  //   };

  //   useImperativeHandle(ref, () => ({
  //     getValue: () => {
  //       return value;
  //     },
  //   }));

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        ref={pickedValueReference}
      />
    </View>
  );
};

export const DropdownSelect = forwardRef(DropdownSelectWithReference);
