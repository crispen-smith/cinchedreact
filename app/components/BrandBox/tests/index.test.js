import React from 'react';
import renderer from 'react-test-renderer';

import BrandBox from '../index';

describe('<BrandBox />', () => {
  it('Renders a BrandBox', () => {
    const tree = renderer.create(<BrandBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
