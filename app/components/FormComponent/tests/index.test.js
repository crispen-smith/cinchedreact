import React from 'react';
import renderer from 'react-test-renderer';

import FormComponent from '../index';

describe('<NameBox />', () => {
  const onSubmit = () => 1;

  it('Renders a FormComponent', () => {
    const tree = renderer
      .create(<FormComponent onSubmit={onSubmit} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
