import { createSelector } from 'reselect';

/**
 * Direct selector to the brand state domain
 */
const selectBrandDomain = state => state.get('brand');

const makeSelectBrand = () =>
  createSelector(selectBrandDomain, substate => substate.toJS());

const makeSelectLoggedIn = () =>
  createSelector(selectBrandDomain, substate => substate.toJS().loggedIn);

export default makeSelectBrand;
export { selectBrandDomain, makeSelectLoggedIn };
