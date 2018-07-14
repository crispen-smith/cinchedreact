import React from 'react';
import renderer from 'react-test-renderer';

import LogToggle from '../index';

describe('<LogToggle />', () => {
  it('Renders a MegaLogoBase', () => {
    const tree = renderer.create(<LogToggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
