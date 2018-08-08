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

    case actionTypes.save:
      return fromJS({
        ...state.toJS(),
        saving: true,
      });

    case actionTypes.isSaved:
      return setSaved(state);
    case actionTypes.setDescription:
      return setDescription(state, action);
    case actionTypes.setPrimaryImage:
      return setPrimaryImage(state, action);
    case actionTypes.addImage:
      return addImage(state, action);
    case actionTypes.setPrice:
      return setPrice(state, action);
    case actionTypes.reset:
      return fromJS({
        ...state.toJS(),
        currentCorset: null,
      });
    case actionTypes.default:
      return state;
    default:
      return state;
  }
}

const createCorset = (state, action) => {
  const newState = state.toJS();
  if (!newState.corsets) newState.corsets = [];
  newState.corsets.push(action.corset);
  newState.currentCorset = action.corset.name;
  return fromJS(newState);
};

/* eslint-disable no-underscore-dangle */
const __getCurrentCorset = state => {
  const { corsets } = state.toJS();
  const currentCorset = corsets.filter(
    corset => corset.name === state.toJS().currentCorset,
  );
  return currentCorset[0];
};

const __getNewCorsetList = (state, currentCorset) => {
  const corsetList = state.corsets.filter(
    corset => corset.name !== state.currentCorset,
  );

  corsetList.push(currentCorset);
  return corsetList;
};

/* eslint-enable */

const setDescription = (state, action) => {
  const newState = {
    ...state.toJS(),
  };
  const currentCorset = __getCurrentCorset(state);
  currentCorset.description = action.description;
  newState.corsets = __getNewCorsetList(newState, currentCorset);
  return fromJS(newState);
};

const setPrimaryImage = (state, action) => {
  const newState = {
    ...state.toJS(),
  };
  const currentCorset = __getCurrentCorset(state);
  currentCorset.primaryImage = action.image;
  newState.corsets = __getNewCorsetList(newState, currentCorset);
  return fromJS(newState);
};

const addImage = (state, action) => {
  const newState = {
    ...state.toJS(),
  };
  const currentCorset = __getCurrentCorset(state);
  if (!currentCorset.images) currentCorset.images = [];
  currentCorset.images.push(action.image);
  newState.corsets = __getNewCorsetList(newState, currentCorset);
  return fromJS(newState);
};

const setPrice = (state, action) => {
  const newState = {
    ...state.toJS(),
  };
  const currentCorset = __getCurrentCorset(state);
  currentCorset.price = action.price;
  newState.corsets = __getNewCorsetList(newState, currentCorset);
  return fromJS(newState);
};

const setSaved = state => {
  const newState = {
    ...state.toJS(),
    saving: false,
  };
  const currentCorset = __getCurrentCorset(state);
  currentCorset.saved = true;
  newState.corsets = __getNewCorsetList(newState, currentCorset);
  return fromJS(newState);
};

export default corsetCreatorReducer;

// const actionTypes = keymirror({
//  X default
//  X save
//  X isSaved
//  X create (Adds a new entry to the corsets array - expects a name and a type)
//  X setDescription
//  X setPrimaryImage
//  X addImage
//  X setPrice
// });
