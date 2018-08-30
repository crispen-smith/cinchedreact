import React from 'react';
import renderer from 'react-test-renderer';

import ProductGrid from '../index';

describe('<ProcuctGrid />', () => {
  it('Renders a ProductGrid', () => {
    const tree = renderer.create(<ProductGrid>TEST</ProductGrid>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
