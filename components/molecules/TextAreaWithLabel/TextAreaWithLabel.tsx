import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {View} from 'react-native';

import {TextArea, TextAreaReference, TextSmall} from '../../atoms';
import styles from './TextAreaWithLabel.styles';

export type Props = {
  placeholder: string;
  labelText: string;
  fontColor: string;
};

export type TextAreaWithLabelReference = {
  getValue: () => string;
  focus: () => void;
  isFocused: () => boolean | undefined;
};

const TextAreaWithLabelAndReference: React.ForwardRefRenderFunction<
  TextAreaWithLabelReference,
  Props
> = ({placeholder, labelText, fontColor}, ref) => {
  const textAreaReference = useRef<TextAreaReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return textAreaReference.current?.getValue() || '';
    },
    focus: () => {
      textAreaReference.current?.focus();
    },
    isFocused: () => {
      return textAreaReference.current?.isFocused();
    },
  }));

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <TextSmall text={labelText} fontColor={fontColor} />
      </View>
      <TextArea placeholder={placeholder} ref={textAreaReference} />
    </View>
  );
};

export const TextAreaWithLabel = forwardRef(TextAreaWithLabelAndReference);
