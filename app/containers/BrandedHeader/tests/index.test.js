import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import BrandedHeader from '../index';
import configureStore from '../../../configureStore';

describe('<BrandedHeader />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Renders a BrandBox', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrandedHeader />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
