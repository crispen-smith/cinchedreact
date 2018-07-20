import { fromJS } from 'immutable';

import { selectBrandDomain, makeSelectLoggedIn } from '../selectors';

describe('selectBrandDomain', () => {
  it('Should Select the Brand State', () => {
    const brandState = fromJS({
      loggedIn: true,
    });
    const mockedState = fromJS({
      brand: brandState,
    });

    expect(selectBrandDomain(mockedState)).toEqual(brandState);
  });
});

describe('makeSelectLoggedIn', () => {
  it('Should select the LoggedIn Status', () => {
    const loggedInSelector = makeSelectLoggedIn();

    const loggedIn = true;
    const mockedState = fromJS({
      brand: {
        loggedIn,
      },
    });
    expect(loggedInSelector(mockedState)).toEqual(loggedIn);
  });
});
