import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the corsetContainer state domain
 */

const selectCorsetContainerDomain = state =>
  state.get('corsetContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CorsetContainer
 */

const makeSelectCorsetContainer = () =>
  createSelector(selectCorsetContainerDomain, substate => substate.toJS());

export default makeSelectCorsetContainer;
export { selectCorsetContainerDomain };
