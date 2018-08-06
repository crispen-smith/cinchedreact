import {
  defaultAction,
  setFilter,
  installCorsets,
  resetAction,
} from '../actions';
import CORSET_ACTION_TYPES from '../constants';

describe('CorsetGallery actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CORSET_ACTION_TYPES.DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });

  describe('setFilter Action', () => {
    it('has a type of INSTALL_CORSETS', () => {
      const filter = 'TEST_FILTER';
      const expected = {
        type: CORSET_ACTION_TYPES.SET_FILTER,
        filter,
      };
      expect(setFilter(filter)).toEqual(expected);
    });
  });
  describe('installCorsets Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const corsets = [{ name: 'first' }, { name: 'second' }];
      const expected = {
        type: CORSET_ACTION_TYPES.INSTALL_CORSETS,
        corsets,
      };
      expect(installCorsets(corsets)).toEqual(expected);
    });
  });
  describe('restAction', () => {
    it('has a type of RESET', () => {
      const expected = {
        type: CORSET_ACTION_TYPES.RESET,
      };
      expect(resetAction()).toEqual(expected);
    });
  });
});
