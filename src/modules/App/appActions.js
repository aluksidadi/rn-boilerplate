import { STORAGE_KEYS } from '../../constants/constants';
// import * as authApi from '../../api/authApi.js';
import * as authApi from '../../api/authMock.js';
// import * as meApi from '../../api/meApi.js';
import * as meApi from '../../api/meMock.js';
import { AsyncStorage } from 'react-native';
import * as navigationActions from '../../modules/Navigation/navigationActions';
import { SCENES } from '../../routes';
import * as colors from '../../styles/colors';
import Snackbar from 'react-native-snackbar';
import { ActionConst } from 'react-native-router-flux';

export const APP_LOGOUT = 'APP_LOGOUT';
export const APP_LOGOUT_SUCCESS = 'APP_LOGOUT_SUCCESS';
export const APP_LOGOUT_ERROR = 'APP_LOGOUT_ERROR';
export const APP_ON_ERROR = 'APP_ON_ERROR';
export const APP_ON_MESSAGE = 'APP_ON_MESSAGE';
export const APP_CREATE_SESSION = 'APP_CREATE_SESSION';
export const APP_DESTROY_SESSION = 'APP_DESTROY_SESSION';
export const APP_GET_ME = 'APP_GET_ME';
export const APP_GET_ME_SUCCESS = 'APP_GET_ME_SUCCESS';
export const APP_GET_ME_ERROR = 'APP_GET_ME_ERROR';
export const APP_GET_LAST_SESSION = 'APP_GET_LAST_SESSION';

const _logout = () => ({
  type: APP_LOGOUT,
});

const _logoutSuccess = () => ({
  type: APP_LOGOUT_SUCCESS,
});

const _logoutError = (error) => ({
  type: APP_LOGOUT_ERROR,
  error,
});

export const logout = () => {
  return (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(_logout());

    return authApi.logout(token)
      .then(
        (resp) => {
          dispatch(navigationActions.changeScene(SCENES.login.key, ActionConst.RESET));

          dispatch(_logoutSuccess());
          dispatch(destroySession());
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_logoutError(error));
        dispatch(destroySession());
        return error;
      });

    return promise;
  };
};

const _getMe = () => ({
  type: APP_GET_ME,
});

const _getMeSuccess = (me) => ({
  type: APP_GET_ME_SUCCESS,
  me,
});

const _getMeError = (error) => ({
  type: APP_GET_ME_ERROR,
  error,
});

export const getMe = () => {
  return (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(_getMe());

    return meApi.get(token)
      .then(
        (resp) => {
          const { me } = resp.data;
          dispatch(_getMeSuccess(me));
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_getMeError(error));
        dispatch(onError(error));
        return error;
      });

    return promise;
  };
};

export const getLastSession = () => {
  return (dispatch, getState) => {
    dispatch({
      type: APP_GET_LAST_SESSION,
    });
    return AsyncStorage
      .getItem(STORAGE_KEYS.token, (error, token) => {
        if (!error && token) {
          dispatch(createSession(token));
          dispatch(getMe());
        }
        return token;
      });
  }
}

export const createSession = (token) => ({
  type: APP_CREATE_SESSION,
  token,
});

export const destroySession = () => ({
  type: APP_DESTROY_SESSION,
});

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
