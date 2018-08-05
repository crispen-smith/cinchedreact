import { fromJS } from 'immutable';
import corsetCreatorReducer from '../reducer';
import * as actions from '../actions';

describe('corsetCreatorReducer', () => {
  const corset = { name: 'Test', type: 'underbust' };

  // Default
  it('returns the initial state when the actionType is default or undefined', () => {
    const inputState = fromJS({});
    expect(corsetCreatorReducer(inputState, actions.defaultAction())).toEqual(
      fromJS({}),
    );
  });

  // Save
  it('Sets the saving flag to true when it recieves a save action', () => {
    const state = fromJS({});
    const expectedState = state.set('saving', true);
    const action = actions.save();
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });

  // Create
  it('Creates a new corset in the gallery when it recieves a creation action', () => {
    const state = fromJS({});
    const action = actions.create(corset);
    const expectedState = fromJS({
      corsets: [corset],
      currentCorset: corset.name,
    });
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });

  // isSaved
  it('Updates the saving flag and saved Corset when it recieves an isSaved action', () => {
    const state = fromJS({
      corsets: [corset],
      currentCorset: corset.name,
      saving: true,
    });
    const savedCorset = {
      ...corset,
      saved: true,
    };
    const expectedState = fromJS({
      corsets: [savedCorset],
      saving: false,
      currentCorset: corset.name,
    });
    expect(corsetCreatorReducer(state, actions.isSaved())).toEqual(
      expectedState,
    );
  });

  // setPrice
  it('Updates the price of the current corset when it recieves a setPrice action', () => {
    const corsets = [
      { name: 'Second Test', type: 'overbust', price: 1 },
      corset,
    ]; // Note reducer pushes edited elements to the end of the array.

    const state = fromJS({
      corsets,
      currentCorset: corset.name,
    });

    corsets[1].price = 2;
    const expectedState = fromJS({
      corsets,
      currentCorset: corset.name,
    });

    const action = actions.setPrice(2);
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });

  // setDescription
  it('Updates the description of the current corset when it recieves a setDescription action', () => {
    const corsets = [
      { name: 'Second Test', type: 'overbust', description: 'foo bar' },
      corset,
    ]; // Note reducer pushes edited elements to the end of the array.

    const state = fromJS({
      corsets,
      currentCorset: corset.name,
    });
    const description = 'Updated Description';
    corsets[1].description = description;
    const expectedState = fromJS({
      corsets,
      currentCorset: corset.name,
    });

    const action = actions.setDescription(description);
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });

  // setPrimaryImage
  it('Updates the primary image of the current corset when it recieves a setPrimaryImage action', () => {
    const corsets = [{ name: 'Second Test', type: 'overbust' }, corset];
    // Note reducer pushes edited elements to the end of the array.

    const state = fromJS({
      corsets,
      currentCorset: corset.name,
    });
    const primaryImage = { url: 'test', alt: 'test' };
    corsets[1].primaryImage = primaryImage;
    const expectedState = fromJS({
      corsets,
      currentCorset: corset.name,
    });

    const action = actions.setPrimaryImage(primaryImage);
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });

  // addImage
  it('Adds an image to the current corset image array when it recieves an addImage action', () => {
    const corsets = [
      { name: 'Second Test', type: 'overbust', images: [] },
      corset,
    ];
    // Note reducer pushes edited elements to the end of the array.

    const state = fromJS({
      corsets,
      currentCorset: corset.name,
    });

    const primaryImage = { url: 'test', alt: 'test' };
    corsets[1].images = [primaryImage];
    const expectedState = fromJS({
      corsets,
      currentCorset: corset.name,
    });

    const action = actions.addImage(primaryImage);
    expect(corsetCreatorReducer(state, action)).toEqual(expectedState);
  });
});

//  X default
//  X save
//  X isSaved
//  X create
//  X setDescription
//  X setPrimaryImage
//  X addImage
//  X setPrice
