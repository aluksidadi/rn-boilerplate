import {
  ME_GET,
  ME_GET_SUCCESS,
  ME_GET_ERROR,
  ME_SET,
} from './meActions';
import {
  AUTH_DESTROY_SESSION,
} from '../auth/authActions';

const initialState = {
  isFetchingMe: false,
  me: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case AUTH_DESTROY_SESSION: {
      return {
        ...state,
        me: null,
      };
    }
    case ME_GET: {
      return {
        ...state,
        isFetchingMe: true,
      };
    }
    case ME_GET_SUCCESS: {
      const {me} = action;
      return {
        ...state,
        isFetchingMe: false,
        me,
      };
    }
    case ME_GET_ERROR: {
      return {
        ...state,
        isFetchingMe: false,
      };
    }
    case ME_SET: {
      const {me} = action;
      return {
        ...state,
        me,
      };
    }
    default: {
      // nothing to do
      return state;
    }
  }
}
