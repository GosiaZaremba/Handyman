import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {ButtonGreen} from './ButtonGreen';

const mockOnPress = jest.fn();

describe('Atom AddPhotoButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <ButtonGreen
          onPress={mockOnPress}
          buttonText={'Button Green'}
          testID="atom-buttonGreen"
          testOnly_pressed={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure text button is passed correctly', () => {
    const {getByTestId} = render(
      <ButtonGreen
        onPress={mockOnPress}
        buttonText={'Button Green'}
        testID="atom-buttonGreen"
        testOnly_pressed={false}
      />,
    );
    const addPhotoButton = getByTestId('atom-buttonGreen');
    expect(addPhotoButton).toHaveTextContent('Button Green');
  });

  test('ensure onPress works correctly', () => {
    const {getByTestId} = render(
      <ButtonGreen
        onPress={mockOnPress}
        buttonText={'Button Green'}
        testID="atom-buttonGreen"
        testOnly_pressed={false}
      />,
    );
    const addPhotoButton = getByTestId('atom-buttonGreen');
    fireEvent.press(addPhotoButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(addPhotoButton.props.style.borderRadius).toBe(10);
    expect(addPhotoButton.props.style.opacity).toBe(undefined);
  });

  test('ensure pressable pressed works correctly', () => {
    const {getByTestId} = render(
      <ButtonGreen
        onPress={mockOnPress}
        buttonText={'Button Green'}
        testID="atom-buttonGreen"
        testOnly_pressed={true}
      />,
    );
    const buttonGreen = getByTestId('atom-buttonGreen');
    fireEvent.press(buttonGreen);
    expect(buttonGreen.props.style.borderRadius).toBe(10);
    expect(buttonGreen.props.style.opacity).toBe(0.8);
  });
});
