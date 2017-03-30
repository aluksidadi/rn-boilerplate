import { STORAGE_KEYS } from '../../constants/constants';
// import * as authApi from '../../api/authApi.js';
import * as authApi from '../../api/authMock.js';
import * as navigationActions from '../../modules/Navigation/navigationActions';
import * as appActions from '../../modules/App/appActions';
import { SCENES } from '../../routes';
import { AsyncStorage } from 'react-native';
import { ActionConst } from 'react-native-router-flux';

export const LOGIN_SCENE_CHANGE_FORM_VALUE = 'LOGIN_SCENE_CHANGE_FORM_VALUE';
export const LOGIN_SCENE_LOGIN = 'LOGIN_SCENE_LOGIN';
export const LOGIN_SCENE_LOGIN_SUCCESS = 'LOGIN_SCENE_LOGIN_SUCCESS';
export const LOGIN_SCENE_LOGIN_ERROR = 'LOGIN_SCENE_LOGIN_ERROR';

export const changeFormValue = (name, value) => ({
  type: LOGIN_SCENE_CHANGE_FORM_VALUE,
  name,
  value,
});

const _login = () => ({
  type: LOGIN_SCENE_LOGIN,
});

const _loginSuccess = (token) => ({
  type: LOGIN_SCENE_LOGIN_SUCCESS,
  token,
});

const _loginError = (error) => ({
  type: LOGIN_SCENE_LOGIN_ERROR,
  error,
});

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(_login());

    return authApi.login(username, password)
      .then(
        (resp) => {
          const { token, me } = resp.data;
          AsyncStorage.setItem(STORAGE_KEYS.token, JSON.stringify(token));

          dispatch(_loginSuccess(token));
          // dispatch(appActions.setSession(token, me));
          dispatch(navigationActions.changeScene(SCENES.home.key, ActionConst.RESET));
          dispatch(appActions.onMessage("Login successful"));
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_loginError(error));
        dispatch(appActions.onError(error));
        return error;
      });

    return promise;
  };
};
