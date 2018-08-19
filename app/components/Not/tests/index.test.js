import React from 'react';
import renderer from 'react-test-renderer';

import Not from '../index';

describe('<Not />', () => {
  it('Renders a Not component', () => {
    const tree = renderer
      .create(<Not>This is not a what it should not be.</Not>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
