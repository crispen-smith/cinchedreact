import React from 'react';
import renderer from 'react-test-renderer';

import NotLoggedInComponent from '../index';

describe('<NotLoggedInComponent />', () => {
  it('Renders a BrandBox', () => {
    const tree = renderer
      .create(<NotLoggedInComponent title="Not Logged In Test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
