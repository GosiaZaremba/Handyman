import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './CustomInput.styles';

export type CustomInputReference = {
  getValue: () => string;
  focus: () => void;
  isFocused: () => boolean | undefined;
};

const CustomInputWithReference: React.ForwardRefRenderFunction<
  CustomInputReference
> = ({}, ref) => {
  const [value, setValue] = useState<string>('');

  const inputReference = useRef<TextInput>(null);

  const onChangeText = (val: string) => {
    setValue(val);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return value;
    },
    focus: () => {
      inputReference.current?.focus();
    },
    isFocused: () => {
      return inputReference.current?.isFocused();
    },
  }));

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={' '}
        secureTextEntry={false}
        value={value}
        style={styles.input}
        ref={inputReference}
      />
    </View>
  );
};

export const CustomInput = forwardRef(CustomInputWithReference);
