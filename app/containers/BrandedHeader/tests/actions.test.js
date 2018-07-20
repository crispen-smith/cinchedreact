import BRAND_ACTIONS from '../constants';

import { login, logout } from '../actions';

describe('Brand Actions', () => {
  describe('login', () => {
    const expectedResult = {
      type: BRAND_ACTIONS.LOGIN,
    };

    expect(login()).toEqual(expectedResult);
  });

  describe('logout', () => {
    const expectedResult = {
      type: BRAND_ACTIONS.LOGOUT,
    };

    expect(logout().toEqual(expectedResult));
  });
});
