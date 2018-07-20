import React from 'react';
import renderer from 'react-test-renderer';

import NameBox from '../index';

describe('<NameBox />', () => {
  const InputName = 'TEST_NAME';
  const InputLabel = 'TEST_LABEL';
  const onChange = () => 1;

  it('Renders a NameBox', () => {
    const tree = renderer
      .create(
        <NameBox
          inputLabel={InputLabel}
          inputName={InputName}
          onChange={onChange}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
