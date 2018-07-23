import { fromJS } from 'immutable';
import corsetContainerReducer from '../reducer';

describe('corsetContainerReducer', () => {
  it('returns the initial state', () => {
    expect(corsetContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
