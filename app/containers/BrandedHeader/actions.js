/*
 *
 * Brand actions
 *
 */

import BRAND_ACTIONS from './constants';

export function login() {
  return {
    type: BRAND_ACTIONS.LOGIN,
  };
}

export function logout() {
  return {
    type: BRAND_ACTIONS.LOGOUT,
  };
}
