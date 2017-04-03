// action types
import {
  ME_GET,
  ME_GET_SUCCESS,
  ME_GET_ERROR,
  ME_SET,
  ME_UPDATE_MY_PROFILE,
  ME_UPDATE_MY_PROFILE_SUCCESS,
  ME_UPDATE_MY_PROFILE_ERROR,
  ME_UPDATE_MY_SETTINGS,
  ME_UPDATE_MY_SETTINGS_SUCCESS,
  ME_UPDATE_MY_SETTINGS_ERROR,
} from './meActions';

// other module action types
import {
  AUTH_DESTROY_SESSION,
} from '../auth/authActions';

const initialState = {
  isFetchingMe: false,
  isUpdatingMyProfile: false,
  isUpdatingMySettings: false,
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
        isUpdatingMyProfile: false,
      };
    }
    case ME_UPDATE_MY_PROFILE: {
      return {
        ...state,
        isUpdatingMyProfile: true,
      };
    }
    case ME_UPDATE_MY_PROFILE_SUCCESS: {
      const {me} = action;
      return {
        ...state,
        isUpdatingMyProfile: false,
        me,
      };
    }
    case ME_UPDATE_MY_PROFILE_ERROR: {
      return {
        ...state,
        isUpdatingMyProfile: false,
      };
    }
    case ME_UPDATE_MY_SETTINGS: {
      return {
        ...state,
        isUpdatingMySettings: true,
      };
    }
    case ME_UPDATE_MY_SETTINGS_SUCCESS: {
      const {me} = action;
      return {
        ...state,
        isUpdatingMySettings: false,
        me,
      };
    }
    case ME_UPDATE_MY_SETTINGS_ERROR: {
      return {
        ...state,
        isUpdatingMySettings: false,
      };
    }
    default: {
      // nothing to do
      return state;
    }
  }
}
