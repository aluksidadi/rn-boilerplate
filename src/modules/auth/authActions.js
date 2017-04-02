import {STORAGE_KEYS} from '../../constants/constants';
// import * as authApi from '../../api/authApi.js';
import * as authApi from '../../api/authMock.js';
import {AsyncStorage} from 'react-native';
import * as navigationActions from '../navigation/navigationActions';
import * as appActions from '../app/appActions';
import * as meActions from '../me/meActions';
import {SCENES} from '../../routes';
import {ActionConst} from 'react-native-router-flux';
import dictionary from './dictionary';
import {t} from '../../i18n';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_ERROR = 'AUTH_LOGOUT_ERROR';
export const AUTH_CREATE_SESSION = 'AUTH_CREATE_SESSION';
export const AUTH_DESTROY_SESSION = 'AUTH_DESTROY_SESSION';
export const AUTH_GET_LAST_SESSION = 'AUTH_GET_LAST_SESSION';


const _login = () => ({
  type: AUTH_LOGIN,
});

const _loginSuccess = (token) => ({
  type: AUTH_LOGIN_SUCCESS,
  token,
});

const _loginError = () => ({
  type: AUTH_LOGIN_ERROR,
});

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(_login());

    // return authApi.loginBadRequest(username, password) // uncomment this to test bad request on login
    return authApi.login(username, password)
      .then((resp) => dispatch(appActions.processApiResponse(resp)))
      .then(
        (resp) => {
          console.log('===', resp);
          const { token } = resp.data;

          dispatch(_loginSuccess(token));
          dispatch(createSession(token));
          dispatch(meActions.getMe());
          dispatch(navigationActions.changeScene(SCENES.home.key, {}, ActionConst.RESET));
          dispatch(appActions.onMessage(t(dictionary.loginSuccess)));
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_loginError());
        return error;
      });

    return promise;
  };
};

const _logout = () => ({
  type: AUTH_LOGOUT,
});

const _logoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS,
});

const _logoutError = (error) => ({
  type: AUTH_LOGOUT_ERROR,
  error,
});

export const logout = () => {
  return (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(_logout());

    return authApi.logout(token)
      .then((resp) => dispatch(appActions.processApiResponse(resp)))
      .then(
        (resp) => {
          dispatch(navigationActions.changeScene(SCENES.login.key, {}, ActionConst.RESET));

          dispatch(_logoutSuccess());
          dispatch(destroySession());
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_logoutError());
        dispatch(destroySession());
        return error;
      });

    return promise;
  };
};

export const getLastSession = () => {
  return (dispatch, getState) => {
    dispatch({
      type: AUTH_GET_LAST_SESSION,
    });
    return AsyncStorage
      .getItem(STORAGE_KEYS.token, (error, token) => {
        if (!error && token) {
          dispatch(createSession(token));
          dispatch(meActions.getMe());
        }
        return token;
      });
  }
}

export const createSession = (token) => ({
  type: AUTH_CREATE_SESSION,
  token,
});

export const destroySession = () => ({
  type: AUTH_DESTROY_SESSION,
});