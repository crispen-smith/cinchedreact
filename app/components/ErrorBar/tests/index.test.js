import React from 'react';
import renderer from 'react-test-renderer';

import ErrorBar from '../index';

describe('<Errorbar />', () => {
  it('Renders an ErrorBar', () => {
    const tree = renderer.create(<ErrorBar message="TEST" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
