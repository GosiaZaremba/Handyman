import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {CardGrey} from './CardGrey';
import {View} from 'react-native';

describe('Atom CardGrey', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <CardGrey testID="atom-cardGrey">
          <View />
        </CardGrey>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure children are rendered correctly', () => {
    const {getByTestId} = render(
      <CardGrey testID="atom-cardGrey">
        <View />
      </CardGrey>,
    );
    const cardGrey = getByTestId('atom-cardGrey');
    expect(cardGrey.props.children.type.displayName).toBe('View');
  });
});
