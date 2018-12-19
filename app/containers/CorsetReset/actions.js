/*
 *
 * CorsetReset actions
 * 
 * Note that CorsetReset is intended only for Dev purposes}
 * 
 *
 */

import { CORSET_RESET_ACTION_TYPES } from './constants';

export function defaultAction() {
  return {
    type: CORSET_RESET_ACTION_TYPES.default,
  };
}

export function resetAction() {
  return {
    type: CORSET_RESET_ACTION_TYPES.reset,
  };
}
