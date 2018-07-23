import React from 'react';
import renderer from 'react-test-renderer';

import DropDown from '../index';

describe('<DropDown />', () => {
  const InputName = 'TEST_NAME';
  const InputLabel = 'TEST_LABEL';
  const onChange = () => 1;
  const Options = ['First', 'Second', 'Third'];

  it('Renders a NameBox', () => {
    const tree = renderer
      .create(
        <DropDown
          inputLabel={InputLabel}
          inputName={InputName}
          onChange={onChange}
          options={Options}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
