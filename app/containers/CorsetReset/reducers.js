/*
 *
 * CorsetReset reducers
 * 
 * Reset the corsets gallery for dev purposes to allow for a clean slate
 * This may or may not need to be hooked into the Stitch app but for now we just need
 * to fight persistance
 *
 */

import { fromJS } from 'immutable';
import { CORSET_RESET_ACTION_TYPES } from './constants';

export const initialState = fromJS({});

function corsetResetReducer(state = initialState, action) {
  switch (action.type) {
    case CORSET_RESET_ACTION_TYPES.reset:
      return resetCorsets(state);
    case CORSET_RESET_ACTION_TYPES.default:
      return state;
    default:
      return state;
  }
}

const resetCorsets = state => {
  const newState = state.toJS();
  if (newState.corsets) newState.corsets = [];
  return fromJS(newState);
};

export default corsetResetReducer;
