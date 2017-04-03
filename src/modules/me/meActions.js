// api
// import * as meApi from '../../api/meApi.js'; // uncomment this for real api
import * as meApi from '../../api/meMock.js'; // mock api for testing

// other module actions
import * as appActions from '../app/appActions';

// i18n
import dictionary from './dictionary';
import {t} from '../../i18n';

// action types
export const ME_GET = 'ME_GET';
export const ME_GET_SUCCESS = 'ME_GET_SUCCESS';
export const ME_GET_ERROR = 'ME_GET_ERROR';
export const ME_UPDATE_MY_PROFILE = 'ME_UPDATE_MY_PROFILE';
export const ME_UPDATE_MY_PROFILE_SUCCESS = 'ME_UPDATE_MY_PROFILE_SUCCESS';
export const ME_UPDATE_MY_PROFILE_ERROR = 'ME_UPDATE_MY_PROFILE_ERROR';
export const ME_UPDATE_MY_SETTINGS = 'ME_UPDATE_MY_SETTINGS';
export const ME_UPDATE_MY_SETTINGS_SUCCESS = 'ME_UPDATE_MY_SETTINGS_SUCCESS';
export const ME_UPDATE_MY_SETTINGS_ERROR = 'ME_UPDATE_MY_SETTINGS_ERROR';

const _getMe = () => ({
  type: ME_GET,
});

const _getMeSuccess = (me) => ({
  type: ME_GET_SUCCESS,
  me,
});

const _getMeError = (error) => ({
  type: ME_GET_ERROR,
  error,
});

export const getMe = () => {
  return (dispatch, getState) => {
    const {token} = getState().app;
    dispatch(_getMe());

    // return meApi.getUnauthorized(token) // to test invalid session
    return meApi.get(token)
      .then((resp) => dispatch(appActions.processApiResponse(resp)))
      .then(
        (resp) => {
          const {me} = resp.data;
          dispatch(_getMeSuccess(me));
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_getMeError(error));
        return error;
      });

    return promise;
  };
};

const _updateMyProfile = () => ({
  type: ME_UPDATE_MY_PROFILE,
});

const _updateMyProfileSuccess = (me) => ({
  type: ME_UPDATE_MY_PROFILE_SUCCESS,
  me,
});

const _updateMyProfileError = (error) => ({
  type: ME_UPDATE_MY_PROFILE_ERROR,
  error,
});

export const updateMyProfile = (profile) => {
  return (dispatch, getState) => {
    const {token} = getState().app;
    dispatch(_updateMyProfile());

    // return meApi.getUnauthorized(token) // to test invalid session
    return meApi.updateMyProfile(token, profile)
      .then((resp) => dispatch(appActions.processApiResponse(resp)))
      .then(
        (resp) => {
          const {me} = resp.data;
          dispatch(_updateMyProfileSuccess(me));
          dispatch(appActions.onMessage(t(dictionary.profileUpdated)))
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_updateMyProfileError(error));
        return error;
      });

    return promise;
  };
};

const _updateMySettings = () => ({
  type: ME_UPDATE_MY_SETTINGS,
});

const _updateMySettingsSuccess = (me) => ({
  type: ME_UPDATE_MY_SETTINGS_SUCCESS,
  me,
});

const _updateMySettingsError = (error) => ({
  type: ME_UPDATE_MY_SETTINGS_ERROR,
  error,
});

export const updateMySettings = (settings) => {
  return (dispatch, getState) => {
    const {token} = getState().app;
    dispatch(_updateMySettings());

    // return meApi.getUnauthorized(token) // to test invalid session
    return meApi.updateMySettings(token, settings)
      .then((resp) => dispatch(appActions.processApiResponse(resp)))
      .then(
        (resp) => {
          const {me} = resp.data;
          dispatch(_updateMySettingsSuccess(me));
          dispatch(appActions.onMessage(t(dictionary.settingsUpdated)))
          return resp;
        }
      )
      .catch((error) => {
        dispatch(_updateMySettingsError(error));
        return error;
      });

    return promise;
  };
};