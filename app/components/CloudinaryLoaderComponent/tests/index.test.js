import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CloudinaryLoaderComponent from '../index';

describe('<CloudinaryLoaderComponent />', () => {
  it('Renders a CloudinaryLoaderComponent without an error bar', () => {
    const dispatch = func => func();
    const completionHandler = () => null;
    const preset = 'corset';
    const dropMessage = 'Dropped';
    const wrapper = renderer
      .create(
        <CloudinaryLoaderComponent
          dispatch={dispatch}
          completionHandler={completionHandler}
          preset={preset}
          dropMessage={dropMessage}
        >
          TEST
        </CloudinaryLoaderComponent>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('Renders a CloudinaryLoaderComponent with an error bar', () => {
    const dispatch = func => func();
    const completionHandler = () => null;
    const preset = 'corset';
    const dropMessage = 'Dropped';
    const err = 'Error Message';

    const CLC = mount(
      <CloudinaryLoaderComponent
        dispatch={dispatch}
        completionHandler={completionHandler}
        preset={preset}
        dropMessage={dropMessage}
      />,
    );
    CLC.setState({ error: true, err }, () => {
      expect(CLC.find('ErrorBar')).toHaveLength(1);
    });
  });
});
