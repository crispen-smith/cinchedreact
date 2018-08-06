import { fromJS } from 'immutable';

import {
  selectCorsetGalleryDomain,
  makeSelectCorsetGallery, // line 23
  makeSelectCorsetGalleryFilter, // 44
  makeSelectorFilteredCorsets, // 63
  makeSelectCurrentCorset, // 101
} from '../selectors';

describe('selectCorsetGalleryDomain', () => {
  it('Should Select the Corset State', () => {
    const corsetGalleryState = fromJS({});
    const mockedState = fromJS({
      corsetGallery: corsetGalleryState,
    });

    expect(selectCorsetGalleryDomain(mockedState)).toEqual(corsetGalleryState);
  });
});

describe('makeSelectCorsetGallery', () => {
  let state;

  beforeAll(() => {
    state = fromJS({});
  });

  it('Should select the entire state', () => {
    const corsetGallerySelector = makeSelectCorsetGallery();

    const filter = 'all';
    const secondElement = 'bar';
    let mockedState = state.set('filter', filter);
    mockedState = state.set('secondElement', secondElement);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });
    expect(corsetGallerySelector(corsetGalleryState)).toEqual(
      mockedState.toJS(),
    );
  });
});

describe('makeSelectCorsetGalleryFilter', () => {
  it('Should select the Filter', () => {
    const state = fromJS({});
    const filterSelector = makeSelectCorsetGalleryFilter();

    const filter = 'all';
    const mockedState = state.set('filter', filter);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });
    expect(filterSelector(corsetGalleryState)).toEqual(filter);
  });
});

describe('makeSelectFilteredCorsets', () => {
  let state;
  let mockedState;
  const filteredCorsetsSelector = makeSelectorFilteredCorsets();
  const corsets = [
    { name: 'underbust', type: 'underbust' },
    { name: 'overbust', type: 'overbust' },
  ];

  beforeAll(() => {
    state = fromJS({});
    mockedState = state.set('corsets', corsets);
  });

  it('Should select all the corsets when the filter = all', () => {
    const filter = 'all';
    mockedState = mockedState.set('filter', filter);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });
    expect(filteredCorsetsSelector(corsetGalleryState)).toEqual(corsets);
  });

  it('Should only select the overbust corsets when the filter = overbust', () => {
    const filter = 'overbust';

    mockedState = mockedState.set('filter', filter);
    const filteredCorsets = corsets.filter(corset => corset.type === filter);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });

    expect(filteredCorsetsSelector(corsetGalleryState)).toEqual(
      filteredCorsets,
    );
  });

  it('Should only select the underbust corsets when the filter = underbust', () => {
    const filter = 'underbust';

    mockedState = mockedState.set('filter', filter);
    const filteredCorsets = corsets.filter(corset => corset.type === filter);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });

    expect(filteredCorsetsSelector(corsetGalleryState)).toEqual(
      filteredCorsets,
    );
  });
});

describe('makeSelectCorsetGalleryFilter', () => {
  it('Should select the currentCorset', () => {
    const state = fromJS({});
    const currentCorsetSelector = makeSelectCurrentCorset();

    const currentCorset = 'test';
    const mockedState = state.set('currentCorset', currentCorset);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });
    expect(currentCorsetSelector(corsetGalleryState)).toEqual(currentCorset);
  });
});
