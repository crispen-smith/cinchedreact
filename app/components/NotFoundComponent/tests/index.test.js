import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundComponent from '../index';

describe('<NotFoundComponent />', () => {
  it('Renders a NotFoundComponent', () => {
    const tree = renderer.create(<NotFoundComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
