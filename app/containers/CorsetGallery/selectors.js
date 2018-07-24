import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the corsetGallery state domain
 */

const selectCorsetGalleryDomain = state =>
  state.get('corsetGallery', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CorsetGallery
 */

const makeSelectCorsetGallery = () =>
  createSelector(selectCorsetGalleryDomain, substate => substate.toJS());

export default makeSelectCorsetGallery;
export { selectCorsetGalleryDomain };
