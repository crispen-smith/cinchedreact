import React from 'react';
// import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import CorsetRouter from '../index';
import configureStore from '../../../configureStore';

describe('<CorsetRouter />', () => {
  let match;
  // let location;
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Renders the gallery when the path is /corsets', () => {
    match = ['/corsets'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('CorsetGallery')).toHaveLength(1);
  });

  it('Renders a Corset when the path is /corsets/test_corset', () => {
    match = ['/corsets/test_corset'];

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match}>
          <CorsetRouter />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find('Corset')).toHaveLength(1);
  });

  it('Renders the editor when the path is /corsets/edit/test_corset', () => {
    match = ['/corsets/edit/test_corset'];

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
