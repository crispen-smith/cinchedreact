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
      return fromJS({
        ...state.toJS(),
        filter: action.filter,
      });
    case CORSET_ACTION_TYPES.GET_CORSETS:
      return state;
    case CORSET_ACTION_TYPES.INSTALL_CORSETS:
      return fromJS({
        ...state.toJS(),
        corsets: action.corsets,
      });
    case CORSET_ACTION_TYPES.RESET:
      return fromJS({
        ...state.toJS(),
        currentCorset: '',
      });
    default:
      return state;
  }
}

export default corsetGalleryReducer;
