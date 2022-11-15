import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {CustomInput, CustomInputReference, Label} from '../../atoms';
import {View} from 'react-native';
import styles from './InputLabel.styles';

export type Props = {
  labelText: string;
  placeholder: string;
  secureTextEntry: boolean;
};

export type CustomInputLabelReference = {
  getValue: () => string;
  focus: () => void;
};

export const InputLabelWithReference: React.ForwardRefRenderFunction<
  CustomInputLabelReference,
  Props
> = ({labelText, placeholder, secureTextEntry}, ref) => {
  const inputReference = useRef<CustomInputReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputReference.current?.getValue() || '';
    },
    focus: () => {
      inputReference?.current?.focus();
    },
  }));

  return (
    <View style={styles.outerContainer}>
      <Label text={labelText} />
      <CustomInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        ref={inputReference}
      />
    </View>
  );
};

export const InputLabel = forwardRef(InputLabelWithReference);
