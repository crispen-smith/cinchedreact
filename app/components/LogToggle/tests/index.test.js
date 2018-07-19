import React from 'react';
import renderer from 'react-test-renderer';

import LogToggle from '../index';

describe('<LogToggle />', () => {
  const testFunc = () => true;

  it('Renders a LogToggle (loggedIn)', () => {
    const tree = renderer
      .create(<LogToggle loggedIn onClick={testFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a LogToggle (Not loggedIn)', () => {
    const tree = renderer
      .create(<LogToggle loggedIn={false} onClick={testFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
