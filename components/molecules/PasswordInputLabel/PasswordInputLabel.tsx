import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {
  CustomPasswordInput,
  CustomPasswordInputReference,
  Label,
} from '../../atoms';
import {View} from 'react-native';
import styles from './PasswordInputLabel.styles';

export type Props = {
  labelText: string;
  placeholder: string;
};

export type PasswordInputLabelReference = {
  getValue: () => string;
  focus: () => void;
};

export const PasswordInputLabelWithReference: React.ForwardRefRenderFunction<
  PasswordInputLabelReference,
  Props
> = ({labelText, placeholder}, ref) => {
  const inputReference = useRef<CustomPasswordInputReference>(null);

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
      <CustomPasswordInput placeholder={placeholder} ref={inputReference} />
    </View>
  );
};

export const PasswordInputLabel = forwardRef(PasswordInputLabelWithReference);
