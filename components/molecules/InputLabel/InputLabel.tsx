import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {CustomInput, CustomInputReference, Label} from '../../atoms';
import {View} from 'react-native';
import styles from './InputLabel.styles';

export type Props = {
  labelText: string;
};

export type InputLabelReference = {
  getValue: () => string;
  focus: () => void;
};

export const InputLabelWithReference: React.ForwardRefRenderFunction<
  InputLabelReference,
  Props
> = ({labelText}, ref) => {
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
      <CustomInput ref={inputReference} />
    </View>
  );
};

export const InputLabel = forwardRef(InputLabelWithReference);
