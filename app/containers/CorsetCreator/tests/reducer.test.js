import { fromJS } from 'immutable';
import corsetCreatorReducer from '../reducer';
import * as actions from '../actions';

describe('corsetCreatorReducer', () => {
  const corset = { name: 'Test', type: 'Underbust' };

  // Default
  it('returns the initial state when the actionType is default or undefined', () => {
    const inputState = fromJS({});
    expect(corsetCreatorReducer(inputState, actions.defaultAction())).toEqual(
      fromJS({}),
    );
  });

  // Create
  it('Creates a new corset in the gallery when it recieves a creation action', () => {
    const state = fromJS({});
    const action = actions.create(corset);
    const unsavedCorset = corset;
    unsavedCorset.saved = false;
    const expectedState = fromJS({
      corsets: [unsavedCorset],
      currentCorset: corset.name,
    });
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });
});
