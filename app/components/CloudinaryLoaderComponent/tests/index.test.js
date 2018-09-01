import React from 'react';
import renderer from 'react-test-renderer';
import CloudinaryLoaderComponent from '../index';

describe('<CloudinaryLoaderComponent />', () => {
  it('Renders a CloudinaryLoaderComponent', () => {
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
});
