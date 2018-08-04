import React from 'react';
import renderer from 'react-test-renderer';

import CorsetThumbnailComponent from '../index';

describe('<CorsetThumbnailComponent />', () => {
  it('Renders a Corset Snapshot', () => {
    const tree = renderer
      .create(
        <CorsetThumbnailComponent
          CorsetName="test"
          CorsetAlt="test"
          CorsetThumbnailSource="test"
          Summary="test"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
