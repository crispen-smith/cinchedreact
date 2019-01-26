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

export function save() {
  return {
    type: actionTypes.save,
  };
}

export function isSaved() {
  return {
    type: actionTypes.isSaved,
  };
}

export function setDescription(description) {
  return {
    type: actionTypes.setDescription,
    description,
  };
}

export function setPrimaryImage(image) {
  // using an image object to allow for passing additional values
  return {
    type: actionTypes.setPrimaryImage,
    image,
  };
}

export function addImage(image) {
  // using an image object to allow for passing additional values
  return {
    type: actionTypes.addImage,
    image,
  };
}

export function setPrice(price) {
  return {
    type: actionTypes.setPrice,
    price,
  };
}

export function reset() {
  return {
    type: actionTypes.reset,
  };
}

export function publish() {
  return {
    type: actionTypes.publish,
  };
}

export function unpublish() {
  return {
    type: actionTypes.unpublish,
  };
}
