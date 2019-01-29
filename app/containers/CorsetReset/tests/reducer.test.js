import { fromJS } from 'immutable';

import corsetResetReducer from '../reducer';

import * as corsetResetActions from '../actions';

describe(corsetResetReducer, () => {
  let state;

  beforeAll(() => {
    state = fromJS({});
  });

  it('Should return the initial State', () => {
    const expectedResult = state;
    expect(corsetResetReducer(undefined, {})).toEqual(expectedResult);
  });

  it('Should handle the resetFilter action correctly', () => {
    const placeholderList = [1, 2, 3, 4];

    state.set('corsets', placeholderList);

    expect(corsetResetReducer(state, corsetResetActions.reset())).toEqual(
      state.set('corsets', []),
    );
  });
});
