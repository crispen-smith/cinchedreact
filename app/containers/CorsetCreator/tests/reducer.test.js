import { fromJS } from 'immutable';
import corsetCreatorReducer from '../reducer';

describe('corsetCreatorReducer', () => {
  it('returns the initial state', () => {
    expect(corsetCreatorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
