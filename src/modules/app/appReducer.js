import {
  APP_GET_ME,
  APP_GET_ME_SUCCESS,
  APP_GET_ME_ERROR,
} from './appActions';
import {
  AUTH_DESTROY_SESSION,
} from '../auth/authActions';
import {STORAGE_KEYS} from '../../constants/constants';
import {AsyncStorage} from 'react-native';

const initialState = {

  isFetchingMe: false,
  me: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case AUTH_DESTROY_SESSION:
      return {
        ...state,
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
