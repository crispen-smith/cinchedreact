import { fromJS } from 'immutable';
import corsetReducer from '../reducer';

describe('corsetReducer', () => {
  it('returns the initial state', () => {
    expect(corsetReducer(undefined, {})).toEqual(fromJS({}));
  });
});
