import React from 'react';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';
import CorsetCreator, { changeHandler } from '../index';
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
});

describe('ChangeHandler interactions with Name', () => {
  it('returns false when passed an empty value', () => {
    expect(
      changeHandler('', {
        corsetGallery: { corsets: [{ name: 'test', type: 'Underbust' }] },
      }),
    ).toEqual(false);
  });
  it('returns true when passed an empty set of corsets', () => {
    expect(
      changeHandler('test', {
        corsetGallery: { corsets: [] },
      }),
    ).toEqual(true);
  });
  it('returns true when passed a name/type tuple not in the array', () => {
    expect(
      changeHandler('test2', {
        corsetGallery: {
          corsets: [{ name: 'test', type: 'Underbust' }],
          productType: 'Underbust',
        },
      }),
    ).toEqual(true);
  });
});
describe('ChangeHandler interactions with ProductType', () => {
  it('returns false when passed any ProductType and any name in state', () => {
    expect(
      changeHandler('Underbust', {
        productName: '',
        corsetGallery: { corsets: [{ name: 'test', type: 'Underbust' }] },
      }),
    ).toEqual(false);
  });
  it('returns true when passed an empty set of corsets', () => {
    expect(
      changeHandler('Underbust', {
        corsetGallery: {
          corsets: [],
          ProductName: 'Test',
        },
      }),
    ).toEqual(true);
  });
  it('returns true when passed a name/type tuple not in the array', () => {
    expect(
      changeHandler('Overbust', {
        corsetGallery: {
          corsets: [{ name: 'test', type: 'Underbust' }],
          productType: 'Underbust',
        },
      }),
    ).toEqual(true);
  });
});
