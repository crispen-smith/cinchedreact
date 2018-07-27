import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import CorsetEditor from '../index';
import configureStore from '../../../configureStore';

describe('<CorsetEditor />', () => {
  let store;
  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Renders a CorsetEditor', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CorsetEditor />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
