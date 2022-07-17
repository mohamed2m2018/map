import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import {TEST_IDS} from '../src/constants/testIds';
import MapButton from '../src/components/MapButton';

let props = {
  name: 'swap',
  onPress: () => {},
};

describe('Map button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    const screenToBeSnapped = renderer
      .create(<MapButton {...props} />)
      .toJSON();
    expect(screenToBeSnapped).toMatchSnapshot();
  });

  it('fires onPress prop when clicked on', async () => {
    const MethodToBeSent = jest.fn(() => {});
    props.onPress = MethodToBeSent;
    const {getByTestId} = render(<MapButton {...props} />);
    const touchable = getByTestId(TEST_IDS.MAP_BUTTON_TOUCHABLE);
    await act(async () => {
      fireEvent.press(touchable);
    });
    expect(MethodToBeSent).toHaveBeenCalled();
  });
});
