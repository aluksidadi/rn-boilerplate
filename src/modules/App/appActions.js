import { STORAGE_KEYS } from '../../constants/constants';
import * as authApi from '../../api/authApi.js';
import { AsyncStorage } from 'react-native';

export const APP_LOGOUT = 'APP_LOGOUT';
export const APP_LOGOUT_SUCCESS = 'APP_LOGOUT_SUCCESS';
export const APP_LOGOUT_ERROR = 'APP_LOGOUT_ERROR';

const _logout = () => ({
  type: APP_LOGOUT,
});

const _logoutSuccess = (token) => ({
  type: APP_LOGOUT_SUCCESS,
});

const _logoutError = (error) => ({
  type: APP_LOGOUT_ERROR,
  error,
});

export const logout = () => {
  return (dispatch, getState) => {
    dispatch(_logout());

    // remove storage regardless
    AsyncStorage.removeItem(STORAGE_KEYS.token);

    return authApi.logout()
      .then((resp) => resp.json())
      .then(
        (resp) => {
          dispatch(_logoutSuccess());
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_logoutError(error));
        return error;
      });

    return promise;
  };
};
