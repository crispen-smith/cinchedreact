import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import CorsetGallery from '../index';
import configureStore from '../../../configureStore';

describe('<CorsetGallery />', () => {
  it('Renders a Corset Snapshot when LoggedIn = True', () => {
    const brand = { loggedIn: true };
    const match = { params: { filter: 'all' } };
    const store = configureStore({}, browserHistory, brand);
    const gallery = mount(
      <Provider store={store}>
        <CorsetGallery match={match} />
      </Provider>,
    );

    expect(gallery).toMatchSnapshot();
    expect(gallery.find('CorsetThumbnailComponent')).toHaveLength(1);
  });

  it('Renders a Corset Snapshot when LoggedIn = false', () => {
    const brand = { loggedIn: false };
    const match = { params: { filter: 'all' } };
    const store = configureStore({}, browserHistory, brand);
    const gallery = mount(
      <Provider store={store}>
        <CorsetGallery match={match} />
      </Provider>,
    );

    expect(gallery).toMatchSnapshot();
  });
});
