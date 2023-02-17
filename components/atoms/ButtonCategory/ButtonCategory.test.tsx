import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {ButtonCategory} from './ButtonCategory';
import {Colors} from '../../../constants/colors';

const mockOnPress = jest.fn();

describe('Atom ButtonCategory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <ButtonCategory
          onPress={mockOnPress}
          testID="atom-buttonCategory"
          testOnly_pressed={true}
          category={require('../../../assets/png/05_icons_cleaning.png')}
          text={'Laundry'}
          isActive={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure onPress works correctly', () => {
    const {getByTestId} = render(
      <ButtonCategory
        onPress={mockOnPress}
        testID="atom-buttonCategory"
        testOnly_pressed={false}
        category={require('../../../assets/png/05_icons_cleaning.png')}
        text={'Laundry'}
        isActive={false}
      />,
    );
    const buttonCategory = getByTestId('atom-buttonCategory');
    fireEvent.press(buttonCategory);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(buttonCategory.props.style.backgroundColor).toBe(Colors.font.white);
  });

  test('ensure pressable pressed works correctly', () => {
    const {getByTestId} = render(
      <ButtonCategory
        onPress={mockOnPress}
        testID="atom-buttonCategory"
        testOnly_pressed={false}
        category={require('../../../assets/png/05_icons_cleaning.png')}
        text={'Laundry'}
        isActive={true}
      />,
    );
    const buttonCategory = getByTestId('atom-buttonCategory');
    fireEvent.press(buttonCategory);
    expect(buttonCategory.props.style.borderRadius).toBe(10);
    expect(buttonCategory.props.style.backgroundColor).toBe(
      Colors.button.categoryButton,
    );
  });
});
