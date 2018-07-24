import { fromJS } from 'immutable';
import corsetEditorReducer from '../reducer';

describe('corsetEditorReducer', () => {
  it('returns the initial state', () => {
    expect(corsetEditorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
