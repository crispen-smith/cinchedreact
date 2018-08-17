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

  it('Creates a new corset entry when the  submitButton is enabled and clicked', () => {
    const brand = { loggedIn: true };
    const corsetGallery = { created: true };
    const store = configureStore({}, browserHistory, brand, corsetGallery);

    const creator = mount(
      <Provider store={store}>
        <CorsetCreator />
      </Provider>,
    );

    const cc = creator.find('CorsetCreator').at(0);
    const nameBox = creator.find('NameBox').at(0);

    nameBox.simulate('change', {
      // First Call - with Handler defined
      target: {
        value: 'test',
        preventDefault: () => {},
      },
    });
    const submitButton = creator
      .find('SubmitButton')
      .at(0)
      .find('input')
      .at(0);

    submitButton.simulate('click', {
      // First Call - with Handler defined
      target: {
        preventDefault: () => {},
        handler: () => {
          const redirect = cc.find('redirect').at(0);
          expect(redirect).toBeDefined();
          expect(cc.instance().action).toBeDefined();
          expect(cc.instance().submitCallback).toBeDefined();
        },
      },
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
      expect(this.state.enabled).toEqual(false);
    }

    NameBox.simulate('change', {
      target: { value: 'test' },
      preventDefault: () => {},
      nameCallback,
      enabledCallBack,
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
      target: { value: 'test' },
      preventDefault: () => {},
      valueCallback,
      enabledCallBack,
    });

    const cc = creator.find('CorsetCreator').at(0);

    expect(cc.instance().typeValueCallback).toBeDefined();
    expect(cc.instance().typeEnabledCallback).toBeDefined();

    productType.simulate('change', {
      target: { value: 'test' },
      preventDefault: () => {},
    });

    expect(cc.instance().typeValueCallback).toBeDefined();
    expect(cc.instance().typeEnabledCallback).toBeDefined();
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
