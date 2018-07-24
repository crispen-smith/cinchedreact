import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the corset state domain
 */

const selectCorsetDomain = state => state.get('corset', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Corset
 */

const makeSelectCorset = () =>
  createSelector(selectCorsetDomain, substate => substate.toJS());

export default makeSelectCorset;
export { selectCorsetDomain };
