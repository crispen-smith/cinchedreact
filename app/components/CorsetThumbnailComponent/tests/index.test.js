import React from 'react';
import renderer from 'react-test-renderer';

import CorsetThumbnailComponent from '../index';

describe('<CorsetThumbnailComponent />', () => {
  it('Renders a BrandBox', () => {
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

// CorsetName: PropTypes.string.isRequired,
// CorsetAlt: PropTypes.string.isRequired,
// CorsetThumbnailSource: PropTypes.string.isRequired,
// Summary: PropTypes.string.isRequired,