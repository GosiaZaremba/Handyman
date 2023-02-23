import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {CardGold} from './CardGold';
import {View} from 'react-native';

describe('Atom CardGold', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <CardGold testID="atom-cardGold">
          <View />
        </CardGold>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure children are rendered correctly', () => {
    const {getByTestId} = render(
      <CardGold testID="atom-cardGold">
        <View />
      </CardGold>,
    );
    const cardGold = getByTestId('atom-cardGold');
    expect(cardGold.props.children.type.displayName).toBe('View');
  });
});
