/*
 *
 * CorsetCreator actions
 *
 */

import actionTypes from './constants';

export function defaultAction() {
  return {
    type: actionTypes.default,
  };
}

export function create(corset) {
  return {
    type: actionTypes.create,
    corset,
  };
}
