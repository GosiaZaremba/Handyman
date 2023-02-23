import React, {createRef} from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {CustomInput, CustomInputReference} from './CustomInput';

describe('Atom CustomInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<CustomInput testID="atom-customInput" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure reference is passed', () => {
    const inputRef = createRef<CustomInputReference>();
    const {getByTestId} = render(
      <CustomInput testID="atom-customInput" ref={inputRef} />,
    );
    const customInput = getByTestId('atom-customInput');
    fireEvent.changeText(customInput, 'input text');
    expect(inputRef.current?.getValue()).toBe('input text');
    expect(inputRef.current?.focus()).toBeUndefined();
  });
});
