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

  describe('Create Action', () => {
    it('has a type of actionTypes.create', () => {
      const corset = { name: 'test', type: 'Underbust' };
      const expected = {
        type: actionTypes.create,
        corset,
      };
      expect(actions.create(corset)).toEqual(expected);
    });
  });
});
