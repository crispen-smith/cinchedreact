import { fromJS } from 'immutable';

import {
  selectCorsetGalleryDomain,
  makeSelectCorsetGallery,
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
  let state;

  beforeAll(() => {
    state = fromJS({});
  });

  it('Should select the Filter', () => {
    const corsetGallerySelector = makeSelectCorsetGallery();

    const filter = 'all';
    const mockedState = state.set('filter', filter);
    const corsetGalleryState = fromJS({ corsetGallery: mockedState });
    expect(corsetGallerySelector(corsetGalleryState)).toEqual(
      mockedState.toJS(),
    );
  });
});
