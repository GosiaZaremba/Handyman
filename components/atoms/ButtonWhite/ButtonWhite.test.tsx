import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {ButtonWhite} from './ButtonWhite';

const mockOnPress = jest.fn();

describe('Atom buttonWhite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <ButtonWhite
          onPress={mockOnPress}
          buttonText={'Button White'}
          testID="atom-buttonWhite"
          testOnly_pressed={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure text is passed correctly', () => {
    const {getByTestId} = render(
      <ButtonWhite
        onPress={mockOnPress}
        buttonText={'Button White'}
        testID="atom-buttonWhite"
        testOnly_pressed={false}
      />,
    );
    const addPhotoButton = getByTestId('atom-buttonWhite');
    expect(addPhotoButton).toHaveTextContent('Button White');
  });

  test('ensure onPress works correctly', () => {
    const {getByTestId} = render(
      <ButtonWhite
        onPress={mockOnPress}
        buttonText={'Button White'}
        testID="atom-buttonWhite"
        testOnly_pressed={false}
      />,
    );
    const buttonWhite = getByTestId('atom-buttonWhite');
    fireEvent.press(buttonWhite);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(buttonWhite.props.style.opacity).toBe(undefined);
  });

  test('ensure pressable pressed works correctly', () => {
    const {getByTestId} = render(
      <ButtonWhite
        onPress={mockOnPress}
        buttonText={'Button White'}
        testID="atom-buttonWhite"
        testOnly_pressed={true}
      />,
    );
    const buttonWhite = getByTestId('atom-buttonWhite');
    fireEvent.press(buttonWhite);
    expect(buttonWhite.props.style.opacity).toBe(0.8);
  });
});
