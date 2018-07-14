import React from 'react';
import renderer from 'react-test-renderer';

import BrandTitle from '../index';

describe('<BrandTitle />', () => {
  it('Renders a BrandTitle Component', () => {
    const tree = renderer.create(<BrandTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
