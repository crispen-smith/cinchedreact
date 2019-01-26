/*
 *
 * CorsetCreator constants
 *
 */

import keymirror from 'keymirror';

const actionTypes = keymirror({
  default: null,
  save: null,
  isSaved: null,
  create: null,
  setDescription: null,
  setPrimaryImage: null,
  addImage: null,
  setPrice: null,
  publish: null,
  unpublish: null,
});

export default actionTypes;
