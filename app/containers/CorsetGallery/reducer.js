/*
 *
 * CorsetGallery reducer
 *
 */

import { fromJS } from 'immutable';
import CORSET_ACTION_TYPES from './constants';

export const initialState = fromJS({});

function corsetGalleryReducer(state = initialState, action) {
  switch (action.type) {
    case CORSET_ACTION_TYPES.SET_FILTER:
      return state.set('filter', action.filter);
    case CORSET_ACTION_TYPES.GET_CORSETS:
      return state;
    case CORSET_ACTION_TYPES.INSTALL_CORSETS:
      return state.setIn(['corsets'], action.corsets);
    default:
      return state;
  }
}

export default corsetGalleryReducer;
