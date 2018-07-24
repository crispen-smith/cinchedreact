import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the corsetCreator state domain
 */

const selectCorsetCreatorDomain = state =>
  state.get('corsetCreator', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CorsetCreator
 */

const makeSelectCorsetCreator = () =>
  createSelector(selectCorsetCreatorDomain, substate => substate.toJS());

export default makeSelectCorsetCreator;
export { selectCorsetCreatorDomain };
