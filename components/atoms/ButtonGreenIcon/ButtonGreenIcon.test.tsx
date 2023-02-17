import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {ButtonGreenIcon} from './ButtonGreenIcon';

const mockOnPress = jest.fn();

describe('Atom buttonGreenIcon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <ButtonGreenIcon
          onPress={mockOnPress}
          buttonText={'Button Green'}
          testID="atom-buttonGreen"
          testOnly_pressed={true}
          iconName={'arrowright'}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure text is passed correctly', () => {
    const {getByTestId} = render(
      <ButtonGreenIcon
        onPress={mockOnPress}
        buttonText={'Button Green Icon'}
        testID="atom-buttonGreenIcon"
        testOnly_pressed={false}
        iconName={'arrowright'}
      />,
    );
    const addPhotoButton = getByTestId('atom-buttonGreenIcon');
    expect(addPhotoButton).toHaveTextContent('Button Green Icon');
  });

  test('ensure onPress works correctly', () => {
    const {getByTestId} = render(
      <ButtonGreenIcon
        onPress={mockOnPress}
        buttonText={'Button Green Icon'}
        testID="atom-buttonGreenIcon"
        testOnly_pressed={false}
        iconName={'arrowright'}
      />,
    );
    const buttonGreenIcon = getByTestId('atom-buttonGreenIcon');
    fireEvent.press(buttonGreenIcon);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(buttonGreenIcon.props.style.opacity).toBe(undefined);
  });

  test('ensure pressable pressed works correctly', () => {
    const {getByTestId} = render(
      <ButtonGreenIcon
        onPress={mockOnPress}
        buttonText={'Button Green Icon'}
        testID="atom-buttonGreenIcon"
        testOnly_pressed={true}
        iconName={'arrowright'}
      />,
    );
    const buttonGreenIcon = getByTestId('atom-buttonGreenIcon');
    fireEvent.press(buttonGreenIcon);
    expect(buttonGreenIcon.props.style.opacity).toBe(0.8);
  });
});
