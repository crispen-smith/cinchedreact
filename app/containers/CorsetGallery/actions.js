/*
 *
 * CorsetGallery actions
 *
 */

import CORSET_ACTION_TYPES from './constants';

export function defaultAction() {
  return {
    type: CORSET_ACTION_TYPES.DEFAULT_ACTION,
  };
}

export function resetAction() {
  return {
    type: CORSET_ACTION_TYPES.RESET,
  };
}

export function setFilter(filter) {
  return {
    type: CORSET_ACTION_TYPES.SET_FILTER,
    filter,
  };
}

export function installCorsets(corsets) {
  return {
    type: CORSET_ACTION_TYPES.INSTALL_CORSETS,
    corsets,
  };
}
