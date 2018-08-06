import React from 'react';
import renderer from 'react-test-renderer';

import SubmitButton from '../index';

describe('<SubmitButton />', () => {
  it('Renders a BrandBox', () => {
    const tree = renderer.create(<SubmitButton label="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
