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

const makeSelectCorsets = () =>
  createSelector(
    selectCorsetGalleryDomain,
    substate =>
      typeof substate.toJS().corsets === 'object'
        ? substate.toJS().corsets
        : [],
  );

const makeSelectCorsetGalleryFilter = () =>
  createSelector(selectCorsetGalleryDomain, substate => substate.toJS().filter);

const makeSelectorFilteredCorsets = () => {
  const selectCorsets = makeSelectCorsets();
  const selectFilter = makeSelectCorsetGalleryFilter();

  return createSelector(
    [selectCorsets, selectFilter],
    (corsets, filter) =>
      /* eslint-disable */
    corsets.filter ?
      filter === 'all'
        ? corsets
        : corsets.filter(corset => corset.type === filter)
      : [],
      /* eslint-enable */
  );
};

export default makeSelectCorsetGallery;

export {
  makeSelectCorsetGallery,
  selectCorsetGalleryDomain,
  makeSelectCorsetGalleryFilter,
  makeSelectorFilteredCorsets,
};
