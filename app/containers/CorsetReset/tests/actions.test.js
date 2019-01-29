import { defaultAction, resetAction } from '../actions';
import { CORSET_RESET_ACTION_TYPES } from '../constants';

describe('CorsetReset actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CORSET_RESET_ACTION_TYPES.default,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });

  describe('Reset Action', () => {
    it('has a type of RESET_ACTION', () => {
      const expected = {
        type: CORSET_RESET_ACTION_TYPES.reset,
      };
      expect(resetAction()).toEqual(expected);
    });
  });
});
