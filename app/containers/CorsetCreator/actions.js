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

export function setName(name) {
  return {
    type: actionTypes.setName,
    name,
  };
}

export function setType(corsetType) {
  return {
    type: actionTypes.setType,
    corsetType,
  };
}

export function setDescription(description) {
  return {
    type: actionTypes.setDescription,
    description,
  };
}

export function setPrimaryImage(primaryImageURL) {
  return {
    type: actionTypes.setPrimaryImage,
    primaryImageURL,
  };
}

export function addImage(imageURL) {
  return {
    type: actionTypes.addImage,
    imageURL,
  };
}

export function setPrice(price) {
  return {
    type: actionTypes.setPrice,
    price,
  };
}

/*
  All Corsets must be loaded to corsetGallery 
*/
