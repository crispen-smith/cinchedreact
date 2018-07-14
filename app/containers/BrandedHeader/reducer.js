import { fromJS } from 'immutable';
import BRAND_ACTIONS from './constants';
const initialState = fromJS({ loggedIn: true });

function brandReducer(state = initialState, action) {
  switch (action.type) {
    case BRAND_ACTIONS.LOGIN: {
      return fromJS({
        ...state.toJS(),
        loggedIn: true,
      });
    }
    case BRAND_ACTIONS.LOGOUT: {
      return fromJS({
        ...state.toJS(),
        loggedIn: false,
      });
    }

    default:
      return state;
  }
}

export default brandReducer;
