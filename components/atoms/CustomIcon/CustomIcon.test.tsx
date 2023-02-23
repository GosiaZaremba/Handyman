import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {CustomIcon} from './CustomIcon';
import icons from '../../../assets/svgs/svgs';

describe('Atom CustomIcon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <CustomIcon testID="atom-customIcon" icon={icons.green.settings} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure svg is rendering correctly', () => {
    const {getByTestId} = render(
      <CustomIcon testID="atom-customIcon" icon={icons.green.settings} />,
    );
    const customIcon = getByTestId('atom-customIcon');
    expect(customIcon.props.xml).toBe(icons.green.settings);
  });
});
