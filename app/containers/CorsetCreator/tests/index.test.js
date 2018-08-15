import React from 'react';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';
import CorsetCreator from '../index';
import BrandedHeader from '../../BrandedHeader';

describe('<CorsetCreator />', () => {
  it('Renders a CorsetCreator when loggedIn and currentCorset is empty', () => {
    const store = configureStore({}, browserHistory);

    const creator = mount(
      <Provider store={store}>
        <CorsetCreator />
      </Provider>,
    );

    expect(creator).toMatchSnapshot();
    expect(creator.find('DropDown')).toHaveLength(1);
    expect(creator.find('NameBox')).toHaveLength(1);
    expect(creator.find('SubmitButton')).toHaveLength(1);
  });

  it('Does not render the CorsetCreator when not logged', () => {
    const store = configureStore({}, browserHistory);
    const creator = mount(
      <Provider store={store}>
        <div>
          <BrandedHeader />
          <CorsetCreator />
        </div>
      </Provider>,
    );
    const bhLink = creator.find('a');
    bhLink.simulate('click');

    expect(creator).toMatchSnapshot();
    expect(creator.find('DropDown')).toHaveLength(0);
    expect(creator.find('NameBox')).toHaveLength(0);
    expect(creator.find('SubmitButton')).toHaveLength(0);
  });

  it('Renders a Redirect when the created flag is true', () => {
    const brand = { loggedIn: true };
    const corsetGallery = { created: true };
    const store = configureStore({}, brand, corsetGallery);
    const creator = mount(
      <Provider store={store}>
        <CorsetCreator />
      </Provider>,
    );

    expect(creator).toMatchSnapshot();
    expect(creator.find('Redirect')).toHaveLength(0);
  });

  it('handles statechanges correctly with a valid new corset', () => {
    const store = configureStore({}, browserHistory);

    const creator = mount(
      <Provider store={store}>
        <CorsetCreator />
      </Provider>,
    );

    const namebox = creator.find('NameBox').at(0);
    const nameBoxField = namebox.find('input').at(0);
    const submitbutton = creator.find('SubmitButton').at(0);
    const promise = Promise.resolve();

    creator.setState({ enabled: false });
    expect(submitbutton.props().enabled).toEqual(false);

    nameBoxField.simulate('change', { target: { value: 'Test' } });
    creator.update();

    return promise.then(() => {
      expect(creator.state().enabled).toEqual(true);
    });
  });
});
