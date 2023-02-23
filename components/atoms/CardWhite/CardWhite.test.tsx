import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {CardWhite} from './CardWhite';
import {View} from 'react-native';

describe('Atom CardWhite', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <CardWhite testID="atom-cardWhite">
          <View />
        </CardWhite>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure children are rendered correctly', () => {
    const {getByTestId} = render(
      <CardWhite testID="atom-cardWhite">
        <View />
      </CardWhite>,
    );
    const cardWhite = getByTestId('atom-cardWhite');
    expect(cardWhite.props.children.type.displayName).toBe('View');
  });
});
