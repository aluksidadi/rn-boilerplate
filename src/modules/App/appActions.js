import { STORAGE_KEYS } from '../../constants/constants';
import * as authApi from '../../api/authApi.js';
import { AsyncStorage } from 'react-native';
import * as navigationActions from '../../modules/Navigation/navigationActions';
import { SCENES } from '../../routes';
import * as colors from '../../styles/colors';
import Snackbar from 'react-native-snackbar';

export const APP_LOGOUT = 'APP_LOGOUT';
export const APP_LOGOUT_SUCCESS = 'APP_LOGOUT_SUCCESS';
export const APP_LOGOUT_ERROR = 'APP_LOGOUT_ERROR';
export const APP_ON_ERROR = 'APP_ON_ERROR';
export const APP_ON_MESSAGE = 'APP_ON_MESSAGE';

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

    return authApi.logout()
      .then(
        (resp) => {
          AsyncStorage.removeItem(STORAGE_KEYS.token);
          dispatch(navigationActions.changeScene(SCENES.login.key, ActionConst.RESET));

          dispatch(_logoutSuccess());
          return resp;
        }
      )
      .catch((error) => {
        AsyncStorage.removeItem(STORAGE_KEYS.token);

        dispatch(_logoutError(error));
        return error;
      });

    return promise;
  };
};

export const onError = (error) => {
  return (dispatch, getState) => {
    dispatch({
      type: APP_ON_ERROR,
      error,
    });
    Snackbar.show({
        backgroundColor: colors.ERROR,
        title: error,
        duration: Snackbar.LENGTH_LONG, // LENGTH_SHORT, LENGTH_LONG, LENGTH_INDEFINITE
        action: {
            title: 'DISMISS',
            color: colors.WHITE,
            onPress: () => {},
        },
    });
  };
}

export const onMessage = (message) => {
  return (dispatch, getState) => {
    dispatch({
      type: APP_ON_MESSAGE,
      message,
    });
    Snackbar.show({
        backgroundColor: colors.PRIMARY,
        title: message,
        duration: Snackbar.LENGTH_LONG, // LENGTH_SHORT, LENGTH_LONG, LENGTH_INDEFINITE
        action: {
            title: 'DISMISS',
            color: colors.WHITE,
            onPress: () => {},
        },
    });
  }
}
