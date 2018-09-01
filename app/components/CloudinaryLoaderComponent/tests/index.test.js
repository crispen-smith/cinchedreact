import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CloudinaryLoaderComponent from '../index';

// import CloudinaryLoaderComponent, { onImageDrop } from '../index';
// TODO: establish a server endpoint that can handle the imageUploader test

describe('<CloudinaryLoaderComponent />', () => {
  let dispatch;
  let completionHandler;
  let preset;
  let dropMessage;

  beforeEach(() => {
    dispatch = func => func();
    completionHandler = () => null;
    preset = 'corset';
    dropMessage = 'Dropped';
  });

  it('Renders a CloudinaryLoaderComponent without an error bar', () => {
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

  // it('Handles image drops', () => {
  //   const files = ['test file'];
  //   const props = {
  //     preset,
  //     dispatch,
  //     completionHandler,
  //   };
  //   const setState = () => null;
  //   const CLOUDINARY_UPLOAD_URL = '';

  //   const onImageDropTester = onImageDrop.bind({
  //     props,
  //     setState,
  //     CLOUDINARY_UPLOAD_URL,
  //   });
  //  onImageDropTester(files);
  // });
});
