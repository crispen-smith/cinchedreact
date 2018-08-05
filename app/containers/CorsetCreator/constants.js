/*
 *
 * CorsetCreator constants
 *
 */

import keymirror from 'keymirror';

const actionTypes = keymirror({
  default: null,
  save: null,
  create: null,
  setName: null,
  setType: null,
  setDescription: null,
  setPrimaryImage: null,
  addImage: null,
  setPrice: null,
});

export default actionTypes;
