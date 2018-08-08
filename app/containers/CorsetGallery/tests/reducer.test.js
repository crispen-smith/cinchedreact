import { fromJS } from 'immutable';

import corsetGalleryReducer from '../reducer';

import * as corsetActions from '../actions';

describe(corsetGalleryReducer, () => {
  let state;

  beforeAll(() => {
    state = fromJS({});
  });

  it('Should return the initial State', () => {
    const expectedResult = state;
    expect(corsetGalleryReducer(undefined, {})).toEqual(expectedResult);
  });

  it('Should handle the setFilter action correctly', () => {
    const testFilter = 'underbust';

    const filtered = state.set('filter', testFilter);

    expect(
      corsetGalleryReducer(state, corsetActions.setFilter(testFilter)),
    ).toEqual(filtered);
  });

  it('Should handle the installCorsets action correctly', () => {
    const testCorsets = [{ name: 'first' }, { name: 'second' }];

    const expectedState = fromJS({ corsets: testCorsets });

    expect(
      corsetGalleryReducer(state, corsetActions.installCorsets(testCorsets)),
    ).toEqual(expectedState);
  });
  it('Should handle the reset action correctly', () => {
    state.set('currentCorset', 'test');

    const expectedState = fromJS({ currentCorset: '' });
    expect(corsetGalleryReducer(state, corsetActions.resetAction())).toEqual(
      expectedState,
    );
  });
});
