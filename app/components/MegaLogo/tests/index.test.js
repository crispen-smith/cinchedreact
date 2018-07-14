import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MegaLogo from '../index';

describe('<MegaLogo />', () => {
  it('Renders a MegaLogoBase', () => {
    const tree = renderer.create(<MegaLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a C', () => {
    const RenderedComponent = shallow(<MegaLogo />);
    expect(RenderedComponent.contains('C')).toEqual(true);
  });
  it('Renders a T', () => {
    const RenderedComponent = shallow(<MegaLogo />);
    expect(RenderedComponent.contains('T')).toEqual(true);
  });
});
