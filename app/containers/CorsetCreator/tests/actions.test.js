import * as actions from '../actions';
import actionTypes from '../constants';

describe('CorsetCreator actions', () => {
  describe('Default Action', () => {
    it('has a type of actionTypes.default', () => {
      const expected = {
        type: actionTypes.default,
      };
      expect(actions.defaultAction()).toEqual(expected);
    });
  });

  describe('Save Action', () => {
    it('has a type of actionTypes.save', () => {
      const expected = {
        type: actionTypes.save,
      };
      expect(actions.save()).toEqual(expected);
    });
  });

  describe('Create Action', () => {
    it('has a type of actionTypes.create', () => {
      const expected = {
        type: actionTypes.create,
      };
      expect(actions.create()).toEqual(expected);
    });
  });

  describe('SetName Action', () => {
    it('has a type of actionTypes.setName', () => {
      const name = 'test';
      const expected = {
        type: actionTypes.setName,
        name,
      };
      expect(actions.setName(name)).toEqual(expected);
    });
  });

  describe('SetType Action', () => {
    it('has a type of actionTypes.setType', () => {
      const corsetType = 'underbust';

      const expected = {
        type: actionTypes.setType,
        corsetType,
      };
      expect(actions.setType(corsetType)).toEqual(expected);
    });
  });

  describe('SetDesscription Action', () => {
    it('has a type of actionTypes.setDescription', () => {
      const description = 'TEST DESCRIPTION';
      const expected = {
        type: actionTypes.setDescription,
        description,
      };
      expect(actions.setDescription(description)).toEqual(expected);
    });
  });

  describe('SetPrimaryImage Action', () => {
    it('has a type of actionTypes.setPrimaryImage', () => {
      const primaryImageURL = 'test';
      const expected = {
        type: actionTypes.setPrimaryImage,
        primaryImageURL,
      };
      expect(actions.setPrimaryImage(primaryImageURL)).toEqual(expected);
    });
  });

  describe('AddImage Action', () => {
    it('has a type of actionTypes.addImage', () => {
      const imageURL = 'test';
      const expected = {
        type: actionTypes.addImage,
        imageURL,
      };
      expect(actions.addImage(imageURL)).toEqual(expected);
    });
  });

  describe('SetPrice Action', () => {
    it('has a type of actionTypes.setPrice', () => {
      const price = 1;
      const expected = {
        type: actionTypes.setPrice,
        price,
      };
      expect(actions.setPrice(price)).toEqual(expected);
    });
  });
});

// const actionTypes = keymirror({
// X   default: null,
// X  save: null,
// X  create: null,
// X  setName: null,
// X  setType: null,
// X  setDescription: null,
// X  setPrimaryImage: null,
// X  addImage: null,
// X  setPrice: null,
// });
