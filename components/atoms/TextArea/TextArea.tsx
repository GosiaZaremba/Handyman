import React, {forwardRef, useRef, useState, useImperativeHandle} from 'react';
import {View, TextInput} from 'react-native';
import styles from './TextArea.styles';

export type Props = {placeholder: string};

export type TextAreaReference = {
  getValue: () => string;
  focus: () => void;
  isFocused: () => boolean | undefined;
};

const TextAreaWithReference: React.ForwardRefRenderFunction<
  TextAreaReference,
  Props
> = ({placeholder}, ref) => {
  const [value, setValue] = useState<string>('');

  const textAreaReference = useRef<TextInput>(null);

  const onChangeText = (val: string) => {
    setValue(val);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return value;
    },
    focus: () => {
      textAreaReference.current?.focus();
    },
    isFocused: () => {
      return textAreaReference.current?.isFocused();
    },
  }));
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={false}
      value={value}
      style={styles.input}
      ref={textAreaReference}
      multiline={true}
      numberOfLines={4}
      textAlignVertical={'top'}
    />
  );
};

export const TextArea = forwardRef(TextAreaWithReference);
