// action types
import {
  AUTH_CREATE_SESSION,
  AUTH_DESTROY_SESSION,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
} from './authActions';

// storage
import {STORAGE_KEYS} from '../../constants/constants';
import {AsyncStorage} from 'react-native';

const initialState = {
  token: null,
  isLoggingIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_CREATE_SESSION: {
      const {token} = action;
      AsyncStorage.setItem(STORAGE_KEYS.token, token);
      return {
        ...state,
        token,
      };
    }
    case AUTH_DESTROY_SESSION: {
      AsyncStorage.removeItem(STORAGE_KEYS.token);
      return {
        ...state,
        token: null,
      };
    }
    case AUTH_LOGIN: {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    default: {
      // nothing to do
      return state;
    }
  }
}
