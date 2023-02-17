import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {ButtonGreenIconFirst} from './ButtonGreenIconFirst';

const mockOnPress = jest.fn();

describe('Atom buttonGreenIcon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <ButtonGreenIconFirst
          onPress={mockOnPress}
          buttonText={'Button Green Icon'}
          testID="atom-buttonGreenIconFirst"
          testOnly_pressed={true}
          iconName={'arrowright'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure text is passed correctly', () => {
    const {getByTestId} = render(
      <ButtonGreenIconFirst
        onPress={mockOnPress}
        buttonText={'Button Green Icon'}
        testID="atom-buttonGreenIconFirst"
        testOnly_pressed={false}
        iconName={'arrowright'}
      />,
    );
    const addPhotoButton = getByTestId('atom-buttonGreenIconFirst');
    expect(addPhotoButton).toHaveTextContent('Button Green Icon');
  });

  test('ensure onPress works correctly', () => {
    const {getByTestId} = render(
      <ButtonGreenIconFirst
        onPress={mockOnPress}
        buttonText={'Button Green Icon'}
        testID="atom-buttonGreenIconFirst"
        testOnly_pressed={false}
        iconName={'arrowright'}
      />,
    );
    const buttonGreenIconFirst = getByTestId('atom-buttonGreenIconFirst');
    fireEvent.press(buttonGreenIconFirst);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(buttonGreenIconFirst.props.style.opacity).toBe(undefined);
  });

  test('ensure pressable pressed works correctly', () => {
    const {getByTestId} = render(
      <ButtonGreenIconFirst
        onPress={mockOnPress}
        buttonText={'Button Green Icon'}
        testID="atom-buttonGreenIconFirst"
        testOnly_pressed={true}
        iconName={'arrowright'}
      />,
    );
    const buttonGreenIconFirst = getByTestId('atom-buttonGreenIconFirst');
    fireEvent.press(buttonGreenIconFirst);
    expect(buttonGreenIconFirst.props.style.opacity).toBe(0.8);
  });
});
