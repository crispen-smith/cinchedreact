/*
 *
 * CorsetCreator reducer
 *
 */

import { fromJS } from 'immutable';
import actionTypes from './constants';

export const initialState = fromJS({});

function corsetCreatorReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.create:
      return createCorset(state, action);
    case actionTypes.default:
      return state;
    default:
      return state;
  }
}

const createCorset = (state, action) => {
  const newState = state.toJS();
  if (!newState.corsets) newState.corsets = [];
  newState.corsets.push({ ...action.corset, saved: false });
  newState.currentCorset = action.corset.name;
  return fromJS(newState);
};

export default corsetCreatorReducer;
