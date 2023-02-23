import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './CustomInput.styles';

export type CustomInputReference = {
  getValue: () => string;
  focus: () => void;
};

export type Props = {
  testID?: string;
};

const CustomInputWithReference: React.ForwardRefRenderFunction<
  CustomInputReference,
  Props
> = ({testID}, ref) => {
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
        testID={testID}
      />
    </View>
  );
};

export const CustomInput = forwardRef(CustomInputWithReference);
