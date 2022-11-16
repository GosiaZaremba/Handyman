import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './CustomPasswordInput.styles';

export type Props = {
  testID?: string;
};

export type CustomPasswordInputReference = {
  getValue: () => string;
  focus: () => void;
  isFocused: () => boolean | undefined;
};

const CustomPasswordInputWithReference: React.ForwardRefRenderFunction<
  CustomPasswordInputReference,
  Props
> = ({testID}, ref) => {
  const [value, setValue] = useState<string>('');
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(true);
  const [passwordIcon, setPasswordIcon] = useState<string>('eye-sharp');

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

  const onPressIcon = () => {
    setPasswordIsVisible(!passwordIsVisible);
    setPasswordIcon(passwordIsVisible ? 'eye-off-sharp' : 'eye-sharp');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={' '}
        secureTextEntry={passwordIsVisible}
        value={value}
        style={styles.input}
        ref={inputReference}
        testID={testID}
      />
      <Pressable style={styles.pressable} onPress={onPressIcon} hitSlop={5}>
        <Icon name={passwordIcon} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export const CustomPasswordInput = forwardRef(CustomPasswordInputWithReference);
