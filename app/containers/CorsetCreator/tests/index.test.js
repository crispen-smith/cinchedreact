import React from 'react';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory, MemoryRouter } from 'react-router-dom';
import configureStore from '../../../configureStore';
import CorsetCreator, { changeHandler } from '../index';
import BrandedHeader from '../../BrandedHeader';

describe('<CorsetCreator />', () => {
  it('Allows the  creation of a new corset entry when logged in and recieving valid inputs', () => {
    const store = configureStore({}, browserHistory);
    const match = ['/corsets/create', '/corsets/edit/:type/:name'];
    const initialIndex = 1;

    const creator = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={match} initialIndex={initialIndex}>
          <CorsetCreator />
        </MemoryRouter>
      </Provider>,
    );

    expect(creator.find('CorsetCreator')).toHaveLength(1);
    expect(creator.find('DropDown')).toHaveLength(1);
    expect(creator.find('NameBox')).toHaveLength(1);
    expect(creator.find('SubmitButton')).toHaveLength(1);

    const nameBox = creator
      .find('NameBox')
      .at(0)
      .find('input')
      .at(0);

    const sb = creator
      .find('SubmitButton')
      .at(0)
      .find('input')
      .at(0);

    expect(creator.find('redirect')).toHaveLength(0);

    nameBox.simulate('change', {
      target: {
        value: 'test',
      },
      persist: () => {},
      preventDefault: () => {},
    });

    function handler() {
      expect(this.state.created).toEqual(true);
    }

    sb.simulate('click', {
      preventDefault: () => {},
      persist: () => {},
      handler,
    });
  });

  it('handles name changes correctly', () => {
    const store = configureStore({}, browserHistory);
    const creator = mount(
      <Provider store={store}>
        <CorsetCreator />
      </Provider>,
    );

    const NameBox = creator
      .find('NameBox')
      .at(0)
      .find('input')
      .at(0);

    function nameCallback() {
      expect(this.state.productName).toEqual('test');
    }

    function enabledCallBack() {
      expect(this.state.enabled).toEqual(true);
    }

    NameBox.simulate('change', {
      target: { value: 'test' },
      preventDefault: () => {},
      nameCallback,
      enabledCallBack,
      persist: () => {},
    });

    const cc = creator.find('CorsetCreator').at(0);

    expect(cc.instance().nameValueCallback).toBeDefined();
    expect(cc.instance().nameEnabledCallBack).toBeDefined();

    NameBox.simulate('change', {
      target: { value: 'test' },
      preventDefault: () => {},
    });

    expect(cc.instance().nameValueCallback).toBeDefined();
    expect(cc.instance().nameEnabledCallBack).toBeDefined();
  });

  it('handles ProductType changes correctly', () => {
    const store = configureStore({}, browserHistory);
    const creator = mount(
      <Provider store={store}>
        <CorsetCreator />
      </Provider>,
    );

    const productType = creator
      .find('DropDown')
      .at(0)
      .find('option')
      .at(0);

    function valueCallback() {
      expect(this.state.ProductType).toEqual('Underbust');
    }

    function enabledCallBack() {
      expect(this.state.enabled).toEqual(false);
    }

    productType.simulate('change', {
      target: { value: 'Overbust' },
      persist: () => {},
      preventDefault: () => {},
      valueCallback,
      enabledCallBack,
    });

    const cc = creator.find('CorsetCreator').at(0);

    expect(cc.instance().typeValueCallback).toBeDefined();
    expect(cc.instance().typeEnabledCallback).toBeDefined();

    productType.simulate('change', {
      target: { value: 'Underbust' },
      preventDefault: () => {},
    });

    expect(cc.instance().typeValueCallback).toBeDefined();
    expect(cc.instance().typeEnabledCallback).toBeDefined();
  });

  it('Does not render the CorsetCreator when not logged in', () => {
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
  it('returns true when passed an empty set of corsets as a result of ', () => {
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
