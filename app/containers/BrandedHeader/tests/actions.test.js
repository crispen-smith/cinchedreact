import BRAND_ACTIONS from '../constants';

import { login, logout } from '../actions';

describe('Brand Actions', () => {
  describe('login', () => {
    it('should return logged in state', () => {
      const expectedResult = {
        type: BRAND_ACTIONS.LOGIN,
      };

      expect(login()).toEqual(expectedResult);
    });
  });

  describe('logout', () => {
    it('should return a logged out state', () => {
      const expectedResult = {
        type: BRAND_ACTIONS.LOGOUT,
      };

      expect(logout()).toEqual(expectedResult);
    });
  });
});
