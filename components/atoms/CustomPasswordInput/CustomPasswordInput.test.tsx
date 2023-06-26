import React, {createRef} from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {
  CustomPasswordInput,
  CustomPasswordInputReference,
} from './CustomPasswordInput';

describe('Atom CustomPasswordInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<CustomPasswordInput testID="atom-customPasswordInput" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure reference is passed', () => {
    const inputRef = createRef<CustomPasswordInputReference>();
    const {getByTestId} = render(
      <CustomPasswordInput testID="atom-customPasswordInput" ref={inputRef} />,
    );
    const customPasswordInput = getByTestId('atom-customPasswordInput');
    const customPasswordInputPressable = getByTestId(
      'atom-customPasswordInput-pressable',
    );
    fireEvent.changeText(customPasswordInput, 'input text');
    expect(inputRef.current?.getValue()).toBe('input text');
    expect(inputRef.current?.focus()).toBeUndefined();
    expect(customPasswordInput.props.secureTextEntry).toBe(true);
    expect(customPasswordInputPressable.props.children[0].props.name).toBe(
      'eye-sharp',
    );
  });

  test('ensure password visibility is working', () => {
    const {getByTestId} = render(
      <CustomPasswordInput testID="atom-customPasswordInput" />,
    );
    const customPasswordInputPressable = getByTestId(
      'atom-customPasswordInput-pressable',
    );
    const customPasswordInput = getByTestId('atom-customPasswordInput');

    fireEvent.press(customPasswordInputPressable);
    expect(customPasswordInput.props.secureTextEntry).toBe(false);
    expect(customPasswordInputPressable.props.children[0].props.name).toBe(
      'eye-off-sharp',
    );
    console.log(customPasswordInputPressable.props.children[0]);
  });
});
