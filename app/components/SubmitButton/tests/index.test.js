import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SubmitButton from '../index';

describe('<SubmitButton />', () => {
  it('Renders a disabled SubmitButton when the props include enabled-false', () => {
    const element = (
      <SubmitButton
        label="test"
        enabled={false}
        onClick={() => true}
        dataCursor="pointer"
      />
    );
    const button = renderer.create(element).toJSON();
    expect(button).toMatchSnapshot();

    const sb = mount(element);
    const input = sb.find('input').at(0);

    expect(input.props().disabled).toEqual(true);
  });

  it('Renders a disabled SubmitButton when the props include enabled-true', () => {
    const element = (
      <SubmitButton
        label="test"
        enabled
        onClick={() => true}
        dataCursor="pointer"
      />
    );
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();

    const sb = mount(element);
    const input = sb.find('input').at(0);

    expect(input.props().disabled).toEqual(false);
  });
});
