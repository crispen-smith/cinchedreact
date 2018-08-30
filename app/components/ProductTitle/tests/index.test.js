import React from 'react';
import renderer from 'react-test-renderer';

import ProductTitle from '../index';

describe('<ProductTitle />', () => {
  it('Renders a ProductTitle', () => {
    const tree = renderer.create(<ProductTitle>TEST</ProductTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
