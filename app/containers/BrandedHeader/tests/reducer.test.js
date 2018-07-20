import { fromJS } from 'immutable';

import brandReducer from '../reducer';

import { login, logout } from '../actions';

describe(brandReducer, () => {
  let state;

  beforeAll(() => {
    state = fromJS({
      loggedIn: true,
    });
  });

  it('Should return the initial State', () => {
    const expectedResult = state;
    expect(brandReducer(undefined, {})).toEqual(expectedResult);
  });

  it('Should handle the logout action correctly', () => {
    const loggedOut = state.set('loggedIn', false);

    expect(brandReducer(state, logout())).toEqual(loggedOut);
  });

  it('Should handle the login action correctly', () => {
    const loggedIn = state.set('loggedIn', true);

    expect(brandReducer(state, login())).toEqual(loggedIn);
  });
});
