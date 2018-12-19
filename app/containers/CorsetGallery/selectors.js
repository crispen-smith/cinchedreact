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

const makeSelectCurrentCorset = () =>
  createSelector(
    selectCorsetGalleryDomain,
    substate => substate.toJS().currentCorset,
  );

const makeSelectorFilteredCorsets = () => {
  const selectCorsets = makeSelectCorsets();
  const selectFilter = makeSelectCorsetGalleryFilter();

  function makeCorsetFilter(corsets, filter) {
    if (filter === 'all' || typeof filter === 'undefined') return corsets;
    return corsets.filter(corset => corset.type === filter);
  }

  return createSelector([selectCorsets, selectFilter], makeCorsetFilter);
};

export default makeSelectCorsetGallery;

export {
  makeSelectCorsetGallery,
  selectCorsetGalleryDomain,
  makeSelectCorsetGalleryFilter,
  makeSelectorFilteredCorsets,
  makeSelectCurrentCorset,
};
