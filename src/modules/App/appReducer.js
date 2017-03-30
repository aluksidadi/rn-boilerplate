import {
  APP_CREATE_SESSION,
  APP_DESTROY_SESSION,
  APP_GET_ME,
  APP_GET_ME_SUCCESS,
  APP_GET_ME_ERROR,
} from './appActions';
import { STORAGE_KEYS } from '../../constants/constants';
import { AsyncStorage } from 'react-native';

const initialState = {
  token: null,
  isFetchingMe: false,
  me: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_CREATE_SESSION:
      const { token } = action;
      AsyncStorage.setItem(STORAGE_KEYS.token, token);
      return {
        ...state,
        token,
      };
    case APP_DESTROY_SESSION:
      AsyncStorage.removeItem(STORAGE_KEYS.token);
      return {
        ...state,
        token: null,
        me: null,
      };
    case APP_GET_ME:
      return {
        ...state,
        isFetchingMe: true,
      };
    case APP_GET_ME_SUCCESS:
      const { me } = action;
      return {
        ...state,
        isFetchingMe: false,
        me,
      };
    case APP_GET_ME_ERROR:
      return {
        ...state,
        isFetchingMe: false,
      };
    default:
      // nothing to do
      return state;
  }
}
