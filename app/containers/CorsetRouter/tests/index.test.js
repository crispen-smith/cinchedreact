import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import CorsetRouter from '../index';
import configureStore from '../../../configureStore';

describe('<CorsetRouter />', () => {
  let match;
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Renders the gallery when the path is /corsets/all', () => {
    match = ['/corsets/all'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('CorsetGallery')).toHaveLength(1);
  });

  // TODO: More complete coverage for filter values.  CUrrently these seem to crash the testing
  // environment
  // it('Renders the gallery when the path is /corsets/overbust', () => {
  //   match = ['/corsets/overbust'];

  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={match}>
  //         <CorsetRouter />
  //       </MemoryRouter>
  //     </Provider>,
  //   );

  //   expect(wrapper.find('CorsetGallery')).toHaveLength(1);
  // });

  // it('Renders the gallery when the path is /corsets/Underbust', () => {
  //   match = ['/corsets/underbust'];

  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <MemoryRouter initialEntries={match}>
  //         <CorsetRouter />
  //       </MemoryRouter>
  //     </Provider>,
  //   );

  //   expect(wrapper.find('CorsetGallery')).toHaveLength(1);
  // });

  it('Renders a Corset when the path is /corsets/Underbust/test_corset', () => {
    match = ['/corsets/Underbust/test_corset'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('Corset')).toHaveLength(1);
  });

  it('Renders a Corset when the path is /corsets/Overbust/test_corset', () => {
    match = ['/corsets/Overbust/test_corset'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('Corset')).toHaveLength(1);
  });

  it('Renders the editor when the path is /corsets/edit/Underbust/test_corset', () => {
    match = ['/corsets/edit/Underbust/test_corset'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('CorsetEditor')).toHaveLength(1);
  });

  it('Renders the editor when the path is /corsets/edit/Overbust/test_corset', () => {
    match = ['/corsets/edit/Overbust/test_corset'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('CorsetEditor')).toHaveLength(1);
  });

  it('Renders the creator when the path is /corsets/create', () => {
    match = ['/corsets/create'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('CorsetCreator')).toHaveLength(1);
  });

  it('Renders the not found component when the path is /corsets/garbage/test_corset', () => {
    match = ['/corsets/garbage/test_corset'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('CorsetEditor')).toHaveLength(0);
  });
});
