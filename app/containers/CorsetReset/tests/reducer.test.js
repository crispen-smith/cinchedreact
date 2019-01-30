import { fromJS } from 'immutable';

import corsetResetReducer, { resetCorsets } from '../reducer';

import * as corsetResetActions from '../actions';

describe(corsetResetReducer, () => {
  let state;

  beforeAll(() => {
    state = fromJS({});
  });

  it('Should return the initial State when passed a default action', () => {
    const expectedResult = state;
    const action = corsetResetActions.defaultAction();
    expect(corsetResetReducer(state, action)).toEqual(expectedResult);
  });

  it('Should handle the resetFilter action correctly', () => {
    const action = corsetResetActions.resetAction();
    const placeholderList = [1, 2, 3, 4];

    const testState = fromJS({ corsets: [] });
    state.set('corsets', placeholderList);

    expect(corsetResetReducer(state, action)).toEqual(testState);
  });

  it('Should return the initial State when passed any other action', () => {
    const expectedResult = state;
    const action = { type: 'test' };
    expect(corsetResetReducer(state, action)).toEqual(expectedResult);
  });
});

describe('resetCorsets', () => {
  it('Should Return an empty gallery', () => {
    const stateToTest = fromJS({ corsets: [1, 2, 3, 4] });
    const expectedState = fromJS({ corsets: [] });

    expect(resetCorsets(stateToTest)).toEqual(expectedState);
  });
});
