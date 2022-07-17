import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import SelectedShop from '../src/components/SelectedShop';
import {render} from '@testing-library/react-native';
import {TEST_IDS} from '../src/constants/testIds';

let props = {
  imageUri:
    'https://logos-download.com/wp-content/uploads/2016/05/Costa_Coffee_logo_logotype-700x700.png',
  shopName: 'Costa Coffee',
  description: 'The best coffee',
};

describe('Selected Shop', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    const screenToBeSnapped = renderer
      .create(<SelectedShop {...props} />)
      .toJSON();
    expect(screenToBeSnapped).toMatchSnapshot();
  });

  it('renders correct name', () => {
    const {getByTestId} = render(<SelectedShop {...props} />);
    const title = getByTestId(TEST_IDS.TEST_ID_SHOP_NAME);
    expect(title.children[0]).toEqual(props.shopName);
  });
  it('renders correct description', () => {
    const {getByTestId} = render(<SelectedShop {...props} />);
    const description = getByTestId(TEST_IDS.TEST_ID_SHOP_DESCRIPTION);
    expect(description.children[0]).toEqual(props.description);
  });

  it('renders correct image', () => {
    const {getByTestId} = render(<SelectedShop {...props} />);
    const image = getByTestId(TEST_IDS.TEST_ID_IMAGE_SHOP);
    expect(image.props.source.uri).toEqual(props.imageUri);
  });
});
