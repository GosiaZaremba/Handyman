import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import 'react-native';
import {CalendarStripe, SelectedDateReference} from './CalendarStripe';

describe('Atom calendarStripe', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<CalendarStripe testID="atom-calendarStripe" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure date is extracted and passed correctly', () => {
    const calendarRef = React.createRef<SelectedDateReference>();
    const {getByTestId} = render(
      <CalendarStripe testID="atom-calendarStripe" ref={calendarRef} />,
    );
    const calendarStripe = getByTestId('atom-calendarStripe');
    fireEvent(
      calendarStripe.props.children,
      'onDateSelected',
      '2023-02-22T20:15:24.192Z',
    );
    expect(calendarRef.current?.getValue()).toBe('2023-02-22T20:15:24.192Z');
  });
});
