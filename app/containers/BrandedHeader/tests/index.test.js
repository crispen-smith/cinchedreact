import renderer from 'react-test-renderer';
import React from 'react';

import { BrandedHeader } from '../index';

describe('<BrandedHeader />', () => {
  it('Renders a BrandBox', () => {
    const tree = renderer.create(<BrandedHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
