import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {AddPhotoButton} from './AddPhotoButton';

const mockOnPress = jest.fn();

describe('Atom AddPhotoButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <AddPhotoButton
          onPress={mockOnPress}
          testID="atom-addPhotoButton"
          testOnly_pressed={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure onPress works correctly', () => {
    const {getByTestId} = render(
      <AddPhotoButton
        onPress={mockOnPress}
        testID="atom-addPhotoButton"
        testOnly_pressed={false}
      />,
    );
    const addPhotoButton = getByTestId('atom-addPhotoButton');
    fireEvent.press(addPhotoButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(addPhotoButton.props.style.borderRadius).toBe(25);
    expect(addPhotoButton.props.style.opacity).toBe(undefined);
  });

  test('ensure pressable pressed works correctly', () => {
    const {getByTestId} = render(
      <AddPhotoButton
        onPress={mockOnPress}
        testID="atom-addPhotoButton"
        testOnly_pressed={true}
      />,
    );
    const addPhotoButton = getByTestId('atom-addPhotoButton');
    fireEvent.press(addPhotoButton);
    expect(addPhotoButton.props.style.borderRadius).toBe(25);
    expect(addPhotoButton.props.style.opacity).toBe(0.9);
  });
});
