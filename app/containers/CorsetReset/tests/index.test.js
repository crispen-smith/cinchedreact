import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import CorsetReset from '../index';
import configureStore from '../../../configureStore';

describe('<CorsetReset />', () => {
  it('Renders a warning message when loggedIn = False', () => {
    const brand = { loggedIn: false };
    const match = { params: {} };
    const store = configureStore({}, browserHistory, brand);
    const reset = mount(
      <Provider store={store}>
        <CorsetReset match={match} />
      </Provider>,
    );

    expect(reset).toMatchSnapshot();
  });
  it('Renders the Reset Message when loggedIn = True', () => {
    const brand = { loggedIn: true };
    const match = { params: {} };
    const store = configureStore({}, browserHistory, brand);
    const reset = mount(
      <Provider store={store}>
        <CorsetReset match={match} />
      </Provider>,
    );

    expect(reset).toMatchSnapshot();
  });
});
