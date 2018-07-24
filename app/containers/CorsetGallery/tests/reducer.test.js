import { fromJS } from 'immutable';
import corsetGalleryReducer from '../reducer';

describe('corsetGalleryReducer', () => {
  it('returns the initial state', () => {
    expect(corsetGalleryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
