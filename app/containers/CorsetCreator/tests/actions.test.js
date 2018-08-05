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

  describe('IsSaved Action', () => {
    it('has a type of actionTypes.isSaved', () => {
      const expected = {
        type: actionTypes.isSaved,
      };
      expect(actions.isSaved()).toEqual(expected);
    });
  });

  describe('Create Action', () => {
    it('has a type of actionTypes.create', () => {
      const corset = { name: 'test', type: 'underbust' };
      const expected = {
        type: actionTypes.create,
        corset,
      };
      expect(actions.create(corset)).toEqual(expected);
    });
  });

  describe('SetDescription Action', () => {
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
      const image = 'test';
      const expected = {
        type: actionTypes.setPrimaryImage,
        image,
      };
      expect(actions.setPrimaryImage(image)).toEqual(expected);
    });
  });

  describe('AddImage Action', () => {
    it('has a type of actionTypes.addImage', () => {
      const image = 'test';
      const expected = {
        type: actionTypes.addImage,
        image,
      };
      expect(actions.addImage(image)).toEqual(expected);
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
// X  setDescription: null,
// X  setPrimaryImage: null,
// X  addImage: null,
// X  setPrice: null,
// });
