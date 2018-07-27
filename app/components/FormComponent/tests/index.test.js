import React from 'react';
import renderer from 'react-test-renderer';

import FormComponent from '../index';

describe('<FormComponent />', () => {
  const onSubmit = () => 1;

  it('Renders a FormComponent', () => {
    const tree = renderer
      .create(
        <FormComponent onSubmit={onSubmit}>
          <label htmlFor="test">
            <input type="text" id="test" />
          </label>
        </FormComponent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
