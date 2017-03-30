import { STORAGE_KEYS } from '../../constants/constants';
// import * as authApi from '../../api/authApi.js';
import * as authApi from '../../api/authMock.js';
import * as navigationActions from '../../modules/navigation/navigationActions';
import { SCENES } from '../../routes';
import { AsyncStorage } from 'react-native';

export const LOGIN_SCENE_CHANGE_FORM_VALUE = 'LOGIN_SCENE_CHANGE_FORM_VALUE';
export const LOGIN_SCENE_LOGIN = 'LOGIN_SCENE_LOGIN';
export const LOGIN_SCENE_LOGIN_SUCCES = 'LOGIN_SCENE_LOGIN_SUCCES';
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
          const { token } = resp.data;
          AsyncStorage.setItem(STORAGE_KEYS.token, JSON.stringify(token));

          dispatch(_loginSuccess(token));
          dispatch(navigationActions.changeScene(SCENES.home))
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_loginError(error));
        return error;
      });

    return promise;
  };
};
