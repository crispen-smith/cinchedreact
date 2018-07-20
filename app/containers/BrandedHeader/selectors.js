import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the brand state domain
 */
const selectBrandDomain = state => state.get('brand', initialState);

const makeSelectLoggedIn = () =>
  createSelector(selectBrandDomain, substate => substate.toJS().loggedIn);

export { selectBrandDomain, makeSelectLoggedIn };
